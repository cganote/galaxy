define("mvc/history/hdca-li-edit", ["exports", "underscore", "mvc/history/hdca-li", "mvc/collection/collection-view-edit", "utils/localization"], function(exports, _underscore, _hdcaLi, _collectionViewEdit, _localization) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _ = _interopRequireWildcard(_underscore);

    var _hdcaLi2 = _interopRequireDefault(_hdcaLi);

    var _collectionViewEdit2 = _interopRequireDefault(_collectionViewEdit);

    var _localization2 = _interopRequireDefault(_localization);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    /* global $ */

    //==============================================================================
    var _super = _hdcaLi2.default.HDCAListItemView;
    /** @class Editing view for HistoryDatasetCollectionAssociation.
     */
    var HDCAListItemEdit = _super.extend(
        /** @lends HDCAListItemEdit.prototype */
        {
            /** logger used to record this.log messages, commonly set to console */
            //logger              : console,
            /** set up: options */
            initialize: function initialize(attributes) {
                _super.prototype.initialize.call(this, attributes);

                /** allow user purge of dataset files? */
                this.purgeAllowed = attributes.purgeAllowed || false;
            },

            /** Override to return editable versions of the collection panels */
            _getFoldoutPanelClass: function _getFoldoutPanelClass() {
                return _collectionViewEdit2.default.CollectionViewEdit;
            },

            // ......................................................................... delete
            /** In this override, add the delete button. */
            _renderPrimaryActions: function _renderPrimaryActions() {
                this.log(this + "._renderPrimaryActions");
                // render the display, edit attr and delete icon-buttons
                return _super.prototype._renderPrimaryActions.call(this).concat([this._renderDeleteButton()]);
            },

            _renderDeleteButton: function _renderDeleteButton() {
                return $("\n                <div class=\"dropdown\">\n                    <a class=\"delete-btn icon-btn\" title=\"" + (0, _localization2.default)("Delete") + "\" data-toggle=\"dropdown\">\n                        <span class=\"fa fa-times\"></span>\n                    </a>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                            <a href=\"#\" class=\"dropdown-item delete-collection\">\n                                " + (0, _localization2.default)("Collection Only") + "\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item delete-collection-and-datasets\">\n                                " + (0, _localization2.default)("Delete Datasets") + "\n                            </a>\n                            <a href=\"#\" style=\"display: " + (this.purgeAllowed ? "inherit" : "none") + "\" class=\"dropdown-item delete-collection-and-purge-datasets\">\n                                " + (0, _localization2.default)("Permanently Delete Datasets") + "\n                            </a>\n                    </div>\n                </div>");
            },

            // ......................................................................... misc
            events: _.extend(_.clone(_super.prototype.events), {
                "click .delete-collection": function clickDeleteCollection(ev) {
                    this.model["delete"]();
                },
                "click .delete-collection-and-datasets": function clickDeleteCollectionAndDatasets(ev) {
                    this.model["delete"](true);
                },
                "click .delete-collection-and-purge-datasets": function clickDeleteCollectionAndPurgeDatasets(ev) {
                    this.model["delete"](true, true);
                }
            }),

            // ......................................................................... misc
            /** string rep */
            toString: function toString() {
                var modelString = this.model ? "" + this.model : "(no model)";
                return "HDCAListItemEdit(" + modelString + ")";
            }
        });

    //==============================================================================
    exports.default = {
        HDCAListItemEdit: HDCAListItemEdit
    };
});
//# sourceMappingURL=../../../maps/mvc/history/hdca-li-edit.js.map
