gdjs.SettingsCode = {};
gdjs.SettingsCode.GDBackgroundObjects1= [];
gdjs.SettingsCode.GDBackgroundObjects2= [];
gdjs.SettingsCode.GDResetHighScoreObjects1= [];
gdjs.SettingsCode.GDResetHighScoreObjects2= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDAreYouSureTextObjects1= [];
gdjs.SettingsCode.GDAreYouSureTextObjects2= [];
gdjs.SettingsCode.GDTextBoxObjects1= [];
gdjs.SettingsCode.GDTextBoxObjects2= [];
gdjs.SettingsCode.GDYesBoxObjects1= [];
gdjs.SettingsCode.GDYesBoxObjects2= [];
gdjs.SettingsCode.GDNoBoxObjects1= [];
gdjs.SettingsCode.GDNoBoxObjects2= [];
gdjs.SettingsCode.GDSoundTextObjects1= [];
gdjs.SettingsCode.GDSoundTextObjects2= [];
gdjs.SettingsCode.GDSoundEnabledButtonObjects1= [];
gdjs.SettingsCode.GDSoundEnabledButtonObjects2= [];
gdjs.SettingsCode.GDSoundDisabledButtonObjects1= [];
gdjs.SettingsCode.GDSoundDisabledButtonObjects2= [];
gdjs.SettingsCode.GDCountDownTextObjects1= [];
gdjs.SettingsCode.GDCountDownTextObjects2= [];
gdjs.SettingsCode.GDCountEnabledButtonObjects1= [];
gdjs.SettingsCode.GDCountEnabledButtonObjects2= [];
gdjs.SettingsCode.GDCountDisabledButtonObjects1= [];
gdjs.SettingsCode.GDCountDisabledButtonObjects2= [];
gdjs.SettingsCode.GDEdgesTextObjects1= [];
gdjs.SettingsCode.GDEdgesTextObjects2= [];
gdjs.SettingsCode.GDEdgesEnabledButtonObjects1= [];
gdjs.SettingsCode.GDEdgesEnabledButtonObjects2= [];
gdjs.SettingsCode.GDEdgesDisabledButtonObjects1= [];
gdjs.SettingsCode.GDEdgesDisabledButtonObjects2= [];
gdjs.SettingsCode.GDTurboSideTextObjects1= [];
gdjs.SettingsCode.GDTurboSideTextObjects2= [];
gdjs.SettingsCode.GDTurboLeftButtonObjects1= [];
gdjs.SettingsCode.GDTurboLeftButtonObjects2= [];
gdjs.SettingsCode.GDTurboRightButtonObjects1= [];
gdjs.SettingsCode.GDTurboRightButtonObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSoundEnabledButtonObjects1Objects = Hashtable.newFrom({"SoundEnabledButton": gdjs.SettingsCode.GDSoundEnabledButtonObjects1});gdjs.SettingsCode.eventsList0x8066a0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("yes");
}{gdjs.evtTools.storage.writeStringInJSONFile("soundEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x8066a0
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSoundDisabledButtonObjects1Objects = Hashtable.newFrom({"SoundDisabledButton": gdjs.SettingsCode.GDSoundDisabledButtonObjects1});gdjs.SettingsCode.eventsList0x806b00 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("no");
}{gdjs.evtTools.storage.writeStringInJSONFile("soundEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x806b00
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDEdgesEnabledButtonObjects1Objects = Hashtable.newFrom({"EdgesEnabledButton": gdjs.SettingsCode.GDEdgesEnabledButtonObjects1});gdjs.SettingsCode.eventsList0x806fb8 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("yes");
}{gdjs.evtTools.storage.writeStringInJSONFile("edgesEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x806fb8
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDEdgesDisabledButtonObjects1Objects = Hashtable.newFrom({"EdgesDisabledButton": gdjs.SettingsCode.GDEdgesDisabledButtonObjects1});gdjs.SettingsCode.eventsList0x807470 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("no");
}{gdjs.evtTools.storage.writeStringInJSONFile("edgesEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x807470
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTurboRightButtonObjects1Objects = Hashtable.newFrom({"TurboRightButton": gdjs.SettingsCode.GDTurboRightButtonObjects1});gdjs.SettingsCode.eventsList0x807928 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("right");
}{gdjs.evtTools.storage.writeStringInJSONFile("turboSide", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x807928
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTurboLeftButtonObjects1Objects = Hashtable.newFrom({"TurboLeftButton": gdjs.SettingsCode.GDTurboLeftButtonObjects1});gdjs.SettingsCode.eventsList0x807dc8 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("left");
}{gdjs.evtTools.storage.writeStringInJSONFile("turboSide", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x807dc8
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResetHighScoreObjects1Objects = Hashtable.newFrom({"ResetHighScore": gdjs.SettingsCode.GDResetHighScoreObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDAreYouSureTextObjects1Objects = Hashtable.newFrom({"AreYouSureText": gdjs.SettingsCode.GDAreYouSureTextObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesBoxObjects1Objects = Hashtable.newFrom({"YesBox": gdjs.SettingsCode.GDYesBoxObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoBoxObjects1Objects = Hashtable.newFrom({"NoBox": gdjs.SettingsCode.GDNoBoxObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTextBoxObjects1Objects = Hashtable.newFrom({"TextBox": gdjs.SettingsCode.GDTextBoxObjects1});gdjs.SettingsCode.eventsList0x808258 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDAreYouSureTextObjects1.length = 0;

gdjs.SettingsCode.GDNoBoxObjects1.length = 0;

gdjs.SettingsCode.GDTextBoxObjects1.length = 0;

gdjs.SettingsCode.GDYesBoxObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDAreYouSureTextObjects1Objects, 200, 500, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesBoxObjects1Objects, 550, 800, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoBoxObjects1Objects, 175, 800, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTextBoxObjects1Objects, 90, 450, "");
}{for(var i = 0, len = gdjs.SettingsCode.GDAreYouSureTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDAreYouSureTextObjects1[i].setLayer("UI");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesBoxObjects1[i].setLayer("UI");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoBoxObjects1[i].setLayer("UI");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDTextBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTextBoxObjects1[i].setLayer("UI");
}
}}

}


}; //End of gdjs.SettingsCode.eventsList0x808258
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesBoxObjects1Objects = Hashtable.newFrom({"YesBox": gdjs.SettingsCode.GDYesBoxObjects1});gdjs.SettingsCode.eventsList0x808a40 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDAreYouSureTextObjects1.createFrom(runtimeScene.getObjects("AreYouSureText"));
gdjs.SettingsCode.GDNoBoxObjects1.createFrom(runtimeScene.getObjects("NoBox"));
gdjs.SettingsCode.GDTextBoxObjects1.createFrom(runtimeScene.getObjects("TextBox"));
/* Reuse gdjs.SettingsCode.GDYesBoxObjects1 */
{gdjs.evtTools.storage.writeStringInJSONFile("highScore", "", "0");
}{for(var i = 0, len = gdjs.SettingsCode.GDAreYouSureTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDAreYouSureTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDTextBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTextBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoBoxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.SettingsCode.eventsList0x808a40
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoBoxObjects1Objects = Hashtable.newFrom({"NoBox": gdjs.SettingsCode.GDNoBoxObjects1});gdjs.SettingsCode.eventsList0x809040 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDAreYouSureTextObjects1.createFrom(runtimeScene.getObjects("AreYouSureText"));
/* Reuse gdjs.SettingsCode.GDNoBoxObjects1 */
gdjs.SettingsCode.GDTextBoxObjects1.createFrom(runtimeScene.getObjects("TextBox"));
gdjs.SettingsCode.GDYesBoxObjects1.createFrom(runtimeScene.getObjects("YesBox"));
{for(var i = 0, len = gdjs.SettingsCode.GDAreYouSureTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDAreYouSureTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDTextBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTextBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesBoxObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesBoxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.SettingsCode.eventsList0x809040
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.SettingsCode.GDBackObjects1});gdjs.SettingsCode.eventsList0x809508 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x809508
gdjs.SettingsCode.eventsList0xb0a98 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("soundEnabled", "", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readStringFromJSONFile("edgesEnabled", "", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readStringFromJSONFile("turboSide", "", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "0";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("yes");
}{gdjs.evtTools.storage.writeStringInJSONFile("soundEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "no";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDSoundDisabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundDisabledButton"));
gdjs.SettingsCode.GDSoundEnabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundEnabledButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDSoundEnabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundEnabledButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSoundDisabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundDisabledButtonObjects1[i].setAnimationName("on");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "yes";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDSoundDisabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundDisabledButton"));
gdjs.SettingsCode.GDSoundEnabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundEnabledButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDSoundEnabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundEnabledButtonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSoundDisabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundDisabledButtonObjects1[i].setAnimationName("off");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "0";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("no");
}{gdjs.evtTools.storage.writeStringInJSONFile("edgesEnabled", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "no";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesDisabledButton"));
gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesEnabledButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDEdgesEnabledButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDEdgesDisabledButtonObjects1[i].setAnimationName("on");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "yes";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesDisabledButton"));
gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesEnabledButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDEdgesEnabledButtonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDEdgesDisabledButtonObjects1[i].setAnimationName("off");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "0";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("right");
}{gdjs.evtTools.storage.writeStringInJSONFile("turboSide", "", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "right";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDTurboLeftButtonObjects1.createFrom(runtimeScene.getObjects("TurboLeftButton"));
gdjs.SettingsCode.GDTurboRightButtonObjects1.createFrom(runtimeScene.getObjects("TurboRightButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDTurboRightButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTurboRightButtonObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDTurboLeftButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTurboLeftButtonObjects1[i].setAnimationName("off");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "left";
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDTurboLeftButtonObjects1.createFrom(runtimeScene.getObjects("TurboLeftButton"));
gdjs.SettingsCode.GDTurboRightButtonObjects1.createFrom(runtimeScene.getObjects("TurboRightButton"));
{for(var i = 0, len = gdjs.SettingsCode.GDTurboRightButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTurboRightButtonObjects1[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDTurboLeftButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDTurboLeftButtonObjects1[i].setAnimationName("on");
}
}}

}


{

gdjs.SettingsCode.GDSoundEnabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundEnabledButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSoundEnabledButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x8066a0(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDSoundDisabledButtonObjects1.createFrom(runtimeScene.getObjects("SoundDisabledButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSoundDisabledButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x806b00(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesEnabledButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDEdgesEnabledButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x806fb8(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.createFrom(runtimeScene.getObjects("EdgesDisabledButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDEdgesDisabledButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x807470(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDTurboRightButtonObjects1.createFrom(runtimeScene.getObjects("TurboRightButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTurboRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x807928(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDTurboLeftButtonObjects1.createFrom(runtimeScene.getObjects("TurboLeftButton"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDTurboLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x807dc8(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDResetHighScoreObjects1.createFrom(runtimeScene.getObjects("ResetHighScore"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResetHighScoreObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x808258(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDYesBoxObjects1.createFrom(runtimeScene.getObjects("YesBox"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesBoxObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x808a40(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDNoBoxObjects1.createFrom(runtimeScene.getObjects("NoBox"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoBoxObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x809040(runtimeScene);} //End of subevents
}

}


{

gdjs.SettingsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList0x809508(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.SettingsCode.eventsList0xb0a98


gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.SettingsCode.GDBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDResetHighScoreObjects1.length = 0;
gdjs.SettingsCode.GDResetHighScoreObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDAreYouSureTextObjects1.length = 0;
gdjs.SettingsCode.GDAreYouSureTextObjects2.length = 0;
gdjs.SettingsCode.GDTextBoxObjects1.length = 0;
gdjs.SettingsCode.GDTextBoxObjects2.length = 0;
gdjs.SettingsCode.GDYesBoxObjects1.length = 0;
gdjs.SettingsCode.GDYesBoxObjects2.length = 0;
gdjs.SettingsCode.GDNoBoxObjects1.length = 0;
gdjs.SettingsCode.GDNoBoxObjects2.length = 0;
gdjs.SettingsCode.GDSoundTextObjects1.length = 0;
gdjs.SettingsCode.GDSoundTextObjects2.length = 0;
gdjs.SettingsCode.GDSoundEnabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDSoundEnabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDSoundDisabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDSoundDisabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDCountDownTextObjects1.length = 0;
gdjs.SettingsCode.GDCountDownTextObjects2.length = 0;
gdjs.SettingsCode.GDCountEnabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDCountEnabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDCountDisabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDCountDisabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDEdgesTextObjects1.length = 0;
gdjs.SettingsCode.GDEdgesTextObjects2.length = 0;
gdjs.SettingsCode.GDEdgesEnabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDEdgesEnabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDEdgesDisabledButtonObjects1.length = 0;
gdjs.SettingsCode.GDEdgesDisabledButtonObjects2.length = 0;
gdjs.SettingsCode.GDTurboSideTextObjects1.length = 0;
gdjs.SettingsCode.GDTurboSideTextObjects2.length = 0;
gdjs.SettingsCode.GDTurboLeftButtonObjects1.length = 0;
gdjs.SettingsCode.GDTurboLeftButtonObjects2.length = 0;
gdjs.SettingsCode.GDTurboRightButtonObjects1.length = 0;
gdjs.SettingsCode.GDTurboRightButtonObjects2.length = 0;

gdjs.SettingsCode.eventsList0xb0a98(runtimeScene);
return;
}
gdjs['SettingsCode'] = gdjs.SettingsCode;
