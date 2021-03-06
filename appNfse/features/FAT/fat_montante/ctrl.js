
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var CrudFat_MONTANTECtrl = (function (_super) {

            __extends(CrudFat_MONTANTECtrl, _super);
            function CrudFat_MONTANTECtrl($rootScope, api, CrudFat_MONTANTEService, lista, $q, $scope) {
                var _this = this;
                _super.call(this);

                this.$rootScope = $rootScope;

                this.api = api;
                this.crudSvc = CrudFat_MONTANTEService;
                this.lista = lista;
                _this.data = [];
                _this.selectedItem = null;
                _this.searchText = null;
                _this.selectedItemChange = selectedItemChange;

                function selectedItemChange(item) {
                    debugger
                    if (_this.currentRecord == null) {
                        //    if (item == null) {
                        //        _this.currentRecord.CLIENTE_CODIGO = null;
                        //        _this.currentRecord.CLIENTE_NOME = null;
                                _this.currentRecord.COD_CADCOLABORADOR = null;
                            } else {
                        _this.currentRecord.COD_CADCOLABORADOR = item.id;
                        //        _this.currentRecord.CLIENTE_NOME = item.FANTASIA;
                        //        _this.currentRecord.COD_CADCOLABORADOR = item.id;
                        //    }
                    }
                }


                this.querySearch = function (query) {

                    return _this.crudSvc.cadcolaboradorLook(query).then(function (response) {
                        debugger;
                        return response;
                    })
                }

            }

            CrudFat_MONTANTECtrl.prototype.crud = function () {
                return "Fat_MONTANTE";
            };

            return CrudFat_MONTANTECtrl;
        })(Controllers.CrudBaseEditCtrl);
        Controllers.CrudFat_MONTANTECtrl = CrudFat_MONTANTECtrl;

        App.modules.Controllers.controller('CrudFat_MONTANTECtrl', CrudFat_MONTANTECtrl);


    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=ctrl.js.map