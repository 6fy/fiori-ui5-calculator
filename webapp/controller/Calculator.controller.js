sap.ui.define([
    "./App.controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.myorg.leanFiori.controller.Calculator", {
        value: "",

        sayHello: function() {
            MessageBox.show("Hello Calculator page");
        },

        onPress: function (oEvent) {
            var val = oEvent.getSource().getText()
            this.value += val;
            this.getView().byId("calculatorScreen").setValue(this.value);
            },

        onCalculate: function (oEvent) {
            if (this.value.includes('+')){
                const valList = this.value.split('+');
                const res = valList.reduce((a, b) => parseInt(a) + parseInt(b));
                console.log(res)
                this.getView().byId("calculatorScreen").setValue(res);
            } else if (this.value.includes('-')){
                const valList = this.value.split('-');
                const res = valList.reduce((a, b) => parseInt(a) - parseInt(b));
                console.log(res)
                this.getView().byId("calculatorScreen").setValue(res);
            } else if (this.value.includes('*')){
                const valList = this.value.split('*');
                const res = valList.reduce((a, b) => parseInt(a) * parseInt(b));
                console.log(res)
                this.getView().byId("calculatorScreen").setValue(res);
            } else if (this.value.includes('/')) {
                const valList = this.value.split('/');
                const res = valList.reduce((a, b) => parseInt(a) / parseInt(b));
                console.log(res)
                this.getView().byId("calculatorScreen").setValue(res);
            }
        },

        onClear: function (oEvent) {
            this.value = ''
            this.getView().byId("calculatorScreen").setValue("");
        }
    });
});