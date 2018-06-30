define("mvc/upload/upload-view", ["exports", "utils/localization", "utils/utils", "mvc/ui/ui-modal", "mvc/ui/ui-tabs", "mvc/upload/upload-utils", "mvc/upload/upload-button", "mvc/upload/default/default-view", "mvc/upload/composite/composite-view", "mvc/upload/collection/collection-view", "mvc/upload/collection/rules-input-view"], function(exports, _localization, _utils, _uiModal, _uiTabs, _uploadUtils, _uploadButton, _defaultView, _compositeView, _collectionView, _rulesInputView) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _localization2 = _interopRequireDefault(_localization);

    var _utils2 = _interopRequireDefault(_utils);

    var _uiModal2 = _interopRequireDefault(_uiModal);

    var _uiTabs2 = _interopRequireDefault(_uiTabs);

    var _uploadUtils2 = _interopRequireDefault(_uploadUtils);

    var _uploadButton2 = _interopRequireDefault(_uploadButton);

    var _defaultView2 = _interopRequireDefault(_defaultView);

    var _compositeView2 = _interopRequireDefault(_compositeView);

    var _collectionView2 = _interopRequireDefault(_collectionView);

    var _rulesInputView2 = _interopRequireDefault(_rulesInputView);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = Backbone.View.extend({
        options: {
            ftp_upload_site: "n/a",
            default_genome: _uploadUtils2.default.DEFAULT_GENOME,
            default_extension: _uploadUtils2.default.DEFAULT_EXTENSION,
            height: 500,
            width: 900,
            auto: _uploadUtils2.default.AUTO_EXTENSION
        },

        // contains all available dataset extensions/types
        list_extensions: [],

        // contains all available genomes
        list_genomes: [],

        initialize: function initialize(options) {
            var _this = this;

            this.options = _utils2.default.merge(options, this.options);

            // create view for upload/progress button
            this.ui_button = new _uploadButton2.default.View({
                onclick: function onclick(e) {
                    e.preventDefault();
                    _this.show();
                },
                onunload: function onunload() {
                    var percentage = _this.ui_button.model.get("percentage", 0);
                    if (percentage > 0 && percentage < 100) {
                        return "Several uploads are queued.";
                    }
                }
            });

            // set element to button view
            this.setElement(this.ui_button.$el);

            // load extensions
            _uploadUtils2.default.getUploadDatatypes(function(list_extensions) {
                _this.list_extensions = list_extensions;
            }, this.options.datatypes_disable_auto, this.options.auto);

            // load genomes
            _uploadUtils2.default.getUploadGenomes(function(list_genomes) {
                _this.list_genomes = list_genomes;
            }, this.default_genome);
        },

        /** Show/hide upload dialog */
        show: function show() {
            var self = this;
            if (!Galaxy.currHistoryPanel || !Galaxy.currHistoryPanel.model) {
                window.setTimeout(function() {
                    self.show();
                }, 500);
                return;
            }
            this.current_user = Galaxy.user.id;
            if (!this.modal) {
                this.tabs = new _uiTabs2.default.View();
                this.default_view = new _defaultView2.default(this);
                this.tabs.add({
                    id: "regular",
                    title: (0, _localization2.default)("Regular"),
                    $el: this.default_view.$el
                });
                this.composite_view = new _compositeView2.default(this);
                this.tabs.add({
                    id: "composite",
                    title: (0, _localization2.default)("Composite"),
                    $el: this.composite_view.$el
                });
                this.collection_view = new _collectionView2.default(this);
                this.tabs.add({
                    id: "collection",
                    title: (0, _localization2.default)("Collection"),
                    $el: this.collection_view.$el
                });
                this.rule_based_view = new _rulesInputView2.default(this);
                this.tabs.add({
                    id: "rule-based",
                    title: (0, _localization2.default)("Rule-based"),
                    $el: this.rule_based_view.$el
                });
                this.modal = new _uiModal2.default.View({
                    title: (0, _localization2.default)("Download from web or upload from disk"),
                    body: this.tabs.$el,
                    height: this.options.height,
                    width: this.options.width,
                    closing_events: true,
                    title_separator: false
                });
            }
            this.modal.show();
        },

        /** Refresh user and current history */
        currentHistory: function currentHistory() {
            return this.current_user && Galaxy.currHistoryPanel.model.get("id");
        },

        /** Get ftp configuration */
        currentFtp: function currentFtp() {
            return this.current_user && this.options.ftp_upload_site;
        },

        /**
         * Package API data from array of models
         * @param{Array} items - Upload items/rows filtered from a collection
         */
        toData: function toData(items, history_id) {
            // create dictionary for data submission
            var data = {
                payload: {
                    tool_id: "upload1",
                    history_id: history_id || this.currentHistory(),
                    inputs: {}
                },
                files: [],
                error_message: null
            };
            // add upload tools input data
            if (items && items.length > 0) {
                var inputs = {
                    file_count: items.length,
                    dbkey: items[0].get("genome", "?"),
                    // sometimes extension set to "" in automated testing after first upload of
                    // a session. https://github.com/galaxyproject/galaxy/issues/5169
                    file_type: items[0].get("extension") || "auto"
                };
                for (var index in items) {
                    var it = items[index];
                    it.set("status", "running");
                    if (it.get("file_size") > 0) {
                        var prefix = "files_" + index + "|";
                        inputs[prefix + "type"] = "upload_dataset";
                        inputs[prefix + "space_to_tab"] = it.get("space_to_tab") && "Yes" || null;
                        inputs[prefix + "to_posix_lines"] = it.get("to_posix_lines") && "Yes" || null;
                        inputs[prefix + "dbkey"] = it.get("genome", null);
                        inputs[prefix + "file_type"] = it.get("extension", null);
                        switch (it.get("file_mode")) {
                            case "new":
                                inputs[prefix + "url_paste"] = it.get("url_paste");
                                break;
                            case "ftp":
                                inputs[prefix + "ftp_files"] = it.get("file_path");
                                break;
                            case "local":
                                data.files.push({
                                    name: prefix + "file_data",
                                    file: it.get("file_data")
                                });
                        }
                    } else {
                        data.error_message = "Upload content incomplete.";
                        it.set("status", "error");
                        it.set("info", data.error_message);
                        break;
                    }
                }
                data.payload.inputs = JSON.stringify(inputs);
            }
            return data;
        }
    });
});
//# sourceMappingURL=../../../maps/mvc/upload/upload-view.js.map
