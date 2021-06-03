// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Family Tree"
                    },
                    {
                        "id":"b",
                        "caption":"Relationships"
                    },
                    {
                        "id":"c",
                        "caption":"Careers"
                    },
                    {
                        "id":"d",
                        "caption":"Memories"
                    }
                ])
                .setAutoTips(false)
                .setDisableTips(true)
                .setLeft("0px")
                .setTop("0px")
                .setHeight("210px")
                .setSandboxTheme("default")
                .setValue("a")
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper2")
                .setLeft("19px")
                .setTop("10px")
                .setWidth("820px")
                .setHeight("525px"),
                "a"
            );
            
            host.xui_ui_svgpaper2.append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt4")
                .setLeft("80px")
                .setTop("60px")
                .setWidth("450px")
                .setHeight("375px")
                .setChartType("Cylinder")
                .setJSONData({
                    "chart":{
                        "caption":"Fuel Meter",
                        "subcaption":"Diesel level in generator Bakersfield Central",
                        "subcaptionFontBold":"0",
                        "lowerLimit":"0",
                        "upperLimit":"120",
                        "lowerLimitDisplay":"Empty",
                        "upperLimitDisplay":"Full",
                        "numberSuffix":" ltrs",
                        "showValue":"0",
                        "showhovereffect":"1",
                        "bgCOlor":"#ffffff",
                        "borderAlpha":"0",
                        "cylFillColor":"#008ee4"
                    },
                    "value":"110"
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});