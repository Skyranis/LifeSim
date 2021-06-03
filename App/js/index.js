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
                        "caption":"Details"
                    },
                    {
                        "id":"b",
                        "caption":"Family Tree"
                    },
                    {
                        "id":"c",
                        "caption":"Relationships"
                    },
                    {
                        "id":"d",
                        "caption":"Careers"
                    },
                    {
                        "id":"e",
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
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout17")
                .setItems([
                    {
                        "id":"before",
                        "size":55,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false,
                        "html":"",
                        "pos":"before"
                    },
                    {
                        "id":"main",
                        "size":80,
                        "min":10
                    },
                    {
                        "id":"after",
                        "size":80,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false,
                        "pos":"after"
                    }
                ])
                .setAutoTips(false)
                .setDisableTips(true)
                .setLeft("0px")
                .setTop("0px")
                .setReadonly(true),
                "a"
            );
            
            host.xui_ui_layout17.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label22")
                .setLeft("9px")
                .setTop("5px")
                .setWidth("172px")
                .setHeight("28px")
                .setBottom("0px")
                .setZIndex(3)
                .setTabindex(2)
                .setDisplay("inline")
                .setCaption("Sim Name")
                .setHAlign("left")
                .setFontColor("#6495ED")
                .setFontSize("22px")
                .setFontWeight("bold"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
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