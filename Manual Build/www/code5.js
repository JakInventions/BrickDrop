gdjs.CreditsCode = {};
gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDBackObjects1= [];
gdjs.CreditsCode.GDBackObjects2= [];
gdjs.CreditsCode.GDTitleObjects1= [];
gdjs.CreditsCode.GDTitleObjects2= [];
gdjs.CreditsCode.GDActualCreditsObjects1= [];
gdjs.CreditsCode.GDActualCreditsObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.CreditsCode.GDBackObjects1});gdjs.CreditsCode.eventsList0x801220 = function(runtimeScene, context) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.popStartedTouch(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


}; //End of gdjs.CreditsCode.eventsList0x801220
gdjs.CreditsCode.eventsList0xac5d0 = function(runtimeScene, context) {

{

gdjs.CreditsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CreditsCode.eventsList0x801220(runtimeScene, context);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.CreditsCode.eventsList0xac5d0


gdjs.CreditsCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDTitleObjects1.length = 0;
gdjs.CreditsCode.GDTitleObjects2.length = 0;
gdjs.CreditsCode.GDActualCreditsObjects1.length = 0;
gdjs.CreditsCode.GDActualCreditsObjects2.length = 0;

gdjs.CreditsCode.eventsList0xac5d0(runtimeScene, context);return;
}
gdjs['CreditsCode']= gdjs.CreditsCode;
