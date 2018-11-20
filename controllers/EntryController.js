const Entry = require("../models/Entry");

exports.listAllEntrys = (req, res) => {
    Entry.find({}, (err, entry) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(entry);
    });
};

exports.createNewEntry = (req, res) => {
    let newEntry = new Entry(req.body);
    newEntry.save((err, entry) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(entry);
    });
};

exports.readEntry = (req, res) => {
    Entry.findById(req.params.entryid, (err, entry) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(entry);
    });
};

exports.updateEntry = (req, res) => {
    Entry.findOneAndUpdate(
        { _id: req.params.entryid },
        req.body,
        { new: true },
        (err, entry) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(entry);
        }
    );
};

exports.deleteEntry = (req, body) => {
    Entry.remove({ _id: req.params.entryid }, (err, entry) => {
        if (err) {
            res.status(404).send(err);
        }
        res.status(200).json({ message: "Entry successfully deleted" });
    });
};
