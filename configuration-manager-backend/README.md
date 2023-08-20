# Configuration Manager Service with Node.js and Firebase

This is a web service for authorized get, post, put and delete operations on configuration parameters data with *Node.js*, *Firestore* for database, and *Firebase* for authorization, following the **Clean Architecture principles**.

---

#### To start setting up the project

Step 1: Clone the repo into your desired directory with the following command: 

```bash
git clone https://github.com/mkeles17/configuration-manager-backend.git
```

#### To run the project with node

(Optional) Step 2: cd into the cloned repo and run:

```bash
npm start
```

API is ready to use on port 3000!

**This API makes queries from/to a collection from the database at Firestore which is owned by me. In order to integrate this api to your own Google Cloud Project you should** 
 - **create your own account for Firestore database and create a collection AND update environmental variable FIREBASE_COLLECTION_ID accordingly,** 
 - **generate your own key.json with the related service account that has authorization for Firestore AND replace it with the existing one.**

*ACOA_URL parameter can be changed to the url of the applications that is going to make request to the api.
*Port and api root can also be changed if desired, by changing the related environmental variables.*



## API Documentation

***BASE_URL=http://localhost:3000***


**GET** - /api/config-log/ -> gets the aggregated results retrieved from Firestore. It includes all parameters of the configuration as parameter_keys and value pairs.

Here is a sample get response:

    {
    “freeUsageLimit”: 5,
    “supportEmail": "support@codeway.co",
    "privacyPage": "https://codeway.com/privacy_en.html",
    "minimumVersion": "1.0",
    "latestVersion": “2.1",
    "compressionQuality": 0.7,
    "btnText": "Try now!"
    }


**GET** - /api/config-params/ -> gets all configuration parameters with details from Firestore as a list. It includes all configuration parameters information: parameter_key, value, description and creation date. This request is used by the frontend panel to display configuration parameters on a table.

Here is a sample get response:

    [
        {
        "creation_date":1691979864715,
        "parameter_key":"latest_version",
        "description":"Latest version of the app",
        "value":"1.4.7"
        },
        {
        "creation_date":1691979776103,
        "value":"1.4.4",
        "parameter_key":"min_version",
        "description":"Minimum required version of the app"
        }
    ]


**POST** - /api/config-params/ -> posts the parameter data given in the RequestBody to the related Firebase collection with doc id as parameter_key. This request is used by the frontend panel to add new configuration parameters to the configuration log. The restrictions are as follows:

* A parameter **must** have 
    - a parameter_key *as string*,
    - a value,
    - a description *as string*,
* RequestBody must be in JSON format.
* You must use the naming convention as stated above.
* The method creates creation_date itself when called upon.
* If a parameter with the same "parameter_key" already exists, it returns a warning and doesn't do anything.

Here is a sample valid RequestBody:

    {
    "parameter_key": "scroll",
    "value": 5,
    "description": "Index of Scroll Paywall for free users.",
    }
    
    
**PUT** - /api/config-params/ -> updates the parameter data given in the RequestBody in the related Firebase collection with doc id as parameter_key. This request is used by the frontend panel to modify configuration parameters of the configuration log. The restrictions are as follows:

* RequestBody **must** have 
    - a value,
    - a description *as string*,
* RequestBody must be in JSON format.
* You must use the naming convention as stated above.

Here is a sample valid RequestBody:

    {
    "parameter_key": "scroll",
    "value": 10,
    "description": "Index of Scroll Paywall for free users."
    }


**DELETE** - /api/config-params/ -> deletes the parameter data of the doc with id parameter_key given in the RequestBody from the related Firebase collection. It first checks if such parameter exists and then performs the delete operation; returns an error and deletes nothing if such parameter does not exists. This request is used by the frontend panel to delete a configuration parameter from the configuration log.

* RequestBody **must** have 
    - a parameter_key *as string*,
* RequestBody must be in JSON format.
* You must use the naming convention as stated above.

Here is a sample valid RequestBody:

    {
    "parameter_key": "scroll",
    }


## Author

- [**Mehmet Kutay Keleş**]

## License

This project is licensed under the MIT License.
