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
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar14")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"a1",
                                "caption":"button"
                            },
                            {
                                "id":"a2",
                                "type":"split"
                            },
                            {
                                "id":"a3",
                                "caption":"button3"
                            }
                        ],
                        "caption":"grp1"
                    }
                ])
                .setTop("160px"),
                "a"
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