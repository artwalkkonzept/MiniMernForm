class Db {
    /**
     * Constructors an object for accessing artwalks in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     */
    constructor(mongoose) {
        // This is the schema we need to store artwalks in MongoDB
        const recordSchema = new mongoose.Schema({
            article_title: String,
            article_description: [String], // A list of bilds as string
        });

        // This model is used in the methods of this class to access artwalks
        this.recordModel = mongoose.model('record', recordSchema);
    }

    async getRecords() {
        try {
            return await this.recordModel.find({});
        } catch (error) {
            console.error("getRecords:", error.message);
            return {};
        }
    }

    async getRecord(id) {
        try {
            return await this.recordModel.findById(id);
        } catch (error) {
            console.error("getRecord:", error.message);
            return {};
        }
    }

    async createRecord(newRecord) {
        // TODO: Error handling
        let record = new this.recordModel(newRecord);
        return await record.save();
    }

    async addBild(recordId, bild) {
        // TODO: Error handling
        const record = await this.getRecord(recordId);
        record.article_description.push(bild);
        return await record.save();
    }

    /**
     * This method adds a bunch of test data if the database is empty.
     * @param count The amount of artwalks to add.
     * @returns {Promise} Resolves when everything has been saved.
     */
    async bootstrap(count = 4) {
        const article_description = ['Bild 1', 'Bild 2', 'Bild 3', 'Bild 4','Bild 5', 'Bild 6', 'Bild 7', 'Bild 8', 'Bild 9', 'Bild 10'];
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (4) + min);
        }

        function getRandomArticle_title() {
            return ['ZKM-Tour', 'Landschaften', 'Imprissionistische Landschaften', 'Tour'][getRandomInt(0,3)]
        }

        function getRandomArticle_description() {
            const shuffled = article_description.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, getRandomInt(1,shuffled.length));
        }

        let l = (await this.getRecords()).length;
        console.log("Record collection size:", l);

        if (l === 0) {
            let promises = [];

            for (let i = 0; i < count; i++) {
                let record = new this.recordModel({
                    article_title: getRandomArticle_title(),
                    article_description: getRandomArticle_description()
                });
                promises.push(record.save());
            }

            return Promise.all(promises);
        }
    }
}

// We export the object used to access the artwalks in the database
module.exports = mongoose => new Db(mongoose);





/*class Db {
    /**
     * Constructors an object for accessing artwalks in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     */
    /*constructor(mongoose) {
        // This is the schema we need to store artwalks in MongoDB
        const recordSchema = new mongoose.Schema({
            article_title: String,
            article_description: String // A list of bilds as string
        });

        // This model is used in the methods of this class to access artwalks
        /*this.recordModel = mongoose.model('record', recordSchema);
    }

    async getrecords() {
        try {
            return await this.recordModel.find({});
        } catch (error) {
            console.error("getRecords:", error.message);
            return {};
        }
    }*/


    /**
     * This method adds a bunch of test data if the database is empty.
     *  The amount of artwalks to add.
     * Resolves when everything has been saved.
     */
    /*async bootstrap() {

        let l = (await this.getRecords);

        if (l === 0) {

            for (let i;  count;) {
                let record = {
                    article_title: getArticle_title(),
                    article_description: getArticle_description()
                };
            }

            return all();
        }
    }
}

// We export the object used to access the artwalks in the database
module.exports = mongoose => new Db(mongoose);






















/*
class Db {
    /**
     * Constructors an object for accessing artwalks in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     
    constructor(mongoose) {
        // This is the schema we need to store artwalks in MongoDB
        const artwalkSchema = new mongoose.Schema({
            name: String,
            bilds: [String] // A list of bilds as string
        });

        // This model is used in the methods of this class to access artwalks
        this.artwalkModel = mongoose.model('artwalk', artwalkSchema);
    }

    async getArtwalks() {
        try {
            return await this.artwalkModel.find({});
        } catch (error) {
            console.error("getArtwalks:", error.message);
            return {};
        }
    }

   

    /**
     * This method adds a bunch of test data if the database is empty.
     *  The amount of artwalks to add.
     * Resolves when everything has been saved.
     
    async bootstrap() {

        let l = (await this.getArtwalks()).length;

        if (l === 0) {

            for (let i;  count;) {
                let artwalk = {
                    name: getName(),
                    bilds: getBilds()
                };
            }

            return all();
        }
    }
}

// We export the object used to access the artwalks in the database
module.exports = mongoose => new Db(mongoose);*/