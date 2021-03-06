"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstractFormatter_1 = require("../language/formatter/abstractFormatter");
var Formatter = (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        _super.apply(this, arguments);
    }
    Formatter.prototype.format = function (failures) {
        var outputLines = failures.map(function (failure) {
            var fileName = failure.getFileName();
            var failureString = failure.getFailure();
            var lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
            var line = lineAndCharacter.line + 1;
            var character = lineAndCharacter.character + 1;
            var code = (failure.getRuleName ? failure.getRuleName() : "");
            var properties = "sourcepath=" + fileName + ";linenumber=" + line + ";columnnumber=" + character + ";code=" + code + ";";
            return "##vso[task.logissue type=warning;" + properties + "]" + failureString;
        });
        return outputLines.join("\n") + "\n";
    };
    return Formatter;
}(abstractFormatter_1.AbstractFormatter));
exports.Formatter = Formatter;
