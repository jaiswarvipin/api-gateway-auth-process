/* variable initilization */
strDefaultResponseArr = {'statusCode':401,'message':'Unauthorized access'};

function doAuthentication (pStrAuthrizationCollection, pStrHeaderCollection, callback){
    console.log("Node Module doAuthentication Method");
    console.log(pStrAuthrizationCollection);
    console.log(pStrHeaderCollection);
    return callback(doBasicAuth(this.strDefaultResponseArr));
}

module.exports = doAuthentication;

/***********************************************************************/
/*Purpose   : This Module Process the Auth Request of each API
/*Created By: Jaiswar Vipin Kumar R.
/*Chaneg Log
/*-----------------------------------------------------------------------
/*Publish Date      by Whome                    Changes Description
/*-----------------------------------------------------------------------
/*14-03-2020        Jaisawr Vipin Kumar R.      Created
/*************************************************************************/
class apigatewayAuthProcess{
    /***************************************************************************/
    /*Purpose   : Default method.
    /*Input     : None.
    /*Response  : None.
    /*Created By: Jaiswar Vipin Kumar R.
    /***************************************************************************/
    constructor(){
        /* variable initilization */
        this.strDefaultResponseArr = {'statusCode':401,'message':'Unauthorized access'}
    }

    /***************************************************************************/
    /*Purpose   : Default method.
    /*Input     : None.
    /*Response  : None.
    /*Created By: Jaiswar Vipin Kumar R.
    /***************************************************************************/
    doAuthentication(pStrAuthrizationCollection, pStrHeaderCollection, callback){
        console.log("Node Module doAuthentication Method");
        console.log(pStrAuthrizationCollection);
        console.log(pStrHeaderCollection);
        return callback(doBasicAuth(this.strDefaultResponseArr));
    }

    /***********************************************************************/
    /*Purpose   : Perform the basic key and value authrization.
    /*Inputs    : pIntApiCode : API Code,
    /*Returns   : Return the Authrization Status: Description.
    /*Created By: Jaiswar Vipin Kumar R.
    /***********************************************************************/
    doBasicAuth(pStrCollection){
        console.log("Node Module doBasicAuth Method");
        console(pStrCollection[0]);
        return (JSON.stringify(pStrCollection));
        /* Checking for slug validation
        if(pStrCollection.length == 0){
            return (strDefaultResponseArr);
        } */
    }
}