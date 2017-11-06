class IconicJsClientIdentifier {
    readonly GUID = "ICONIC_JS_CLIENT_GUID";
    guid: string;
    remoteData: {};
    callback;

    getGuid = function() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
        this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };

    s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    constructor(debug: boolean) {
            if (debug) {
                console.log("Checking for stored guid");
            }
            let storedGuid = localStorage.getItem(this.GUID);
            if (storedGuid) {
                this.guid = storedGuid;
                if (debug) {
                    console.log("Found " + this.guid);
                }
            }
            else {
                this.guid = this.getGuid();
                localStorage.setItem(this.GUID, this.guid);
                if (debug) {
                    console.log("Not Found. Created new: " + this.guid);
                }
            }

            if (debug) {
                console.log("Applying it to all guid inputs");
            }
            $("input.user_guid").val(this.guid);

            /* if(debug) {
             console.log("Retrieving any server stored info");
             }

             let self = this;
             $.get(serverUrl + "?guid=" + this.guid, function(data) {
             if(debug) {
             console.log("Retrieving any server stored info");
             }
             })
             .done(function(data) {
             if(debug) {
             console.log("success. Calling callback");
             }
             this.remoteData = data;
             self.callback(data);

             })
             .fail(function(data){

             if(debug) {
             console.log("error");
             }
             })
             .always(function(data){
             if(debug) {
             console.log("always this");
             }
             })
             ;
             */
        }

}