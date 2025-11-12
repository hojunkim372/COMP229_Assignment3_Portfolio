import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createContact = async (req, res) => {
  try {
    const userRole = req.user.role;
    if (userRole !== "admin")
      return res.status(403).json({ message: "Only admin can create contacts" });

    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Only admin can update contacts" });

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Only admin can delete contacts" });

    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
