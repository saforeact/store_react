const { User, Brand, Type, Device } = require("../models");
const fs = require("fs");
const rimraf = require("rimraf");
class AdminController {
  async getAllUsers(req, res) {
    const roles = ["Admin", "User"];
    try {
      const users = await User.find({});
      const resUsers = users.map((u) => ({
        _id: u._id,
        email: u.email,
        role: u.role,
      }));
      res.status(200).json({ users: resUsers, roles });
    } catch (error) {
      res.status(400);
    }
  }
  async saveNewUsersList(req, res) {
    const { userList, _id } = req.body;
    try {
      userList.forEach(async (user) => {
        await User.findOneAndUpdate({ _id: user._id }, { role: user.role });
      });
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async deleteUsers(req, res) {
    const { removeList, _id } = req.body;
    try {
      for await (let itemID of removeList) {
        await User.findOneAndDelete({ _id: itemID });
      }

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async createProduct(req, res) {
    const { _id, product } = req.body;

    try {
      let brand = await Brand.findOne({
        name: product.brand.toLowerCase(),
      });
      let category = await Type.findOne({
        name: product.category.toLowerCase(),
      });
      if (!brand) {
        const newBrand = new Brand({ name: product.brand.toLowerCase() });
        brand = await newBrand.save();
      }
      if (!category) {
        const newCategiry = new Type({ name: product.category.toLowerCase() });
        category = await newCategiry.save();
      }
      const newProduct = new Device({
        name: product.name,
        brandId: brand._id,
        typeId: category._id,
        price: product.price,
        description: product.description,
      });
      await newProduct.save();
      return res
        .status(200)
        .json({ message: "Success", _idProd: newProduct._id });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async editProduct(req, res) {
    try {
      const { _id, product, idProduct } = req.body;
      await Device.findOneAndUpdate({ _id: idProduct }, product);
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async addPhotoToProduct(req, res) {
    const { _idProd } = req.query;
    const files = req.files;
    const UPLOAD_DIR = "photosProduct";
    try {
      fs.stat("./" + UPLOAD_DIR, function (err) {
        if (err) {
          fs.mkdirSync("./" + UPLOAD_DIR);
        }
      });
      fs.stat("./" + UPLOAD_DIR + "/" + _idProd, async function (err) {
        if (err) {
          fs.mkdirSync("./" + UPLOAD_DIR + "/" + _idProd);
        }
        let counter = 0;

        const urlList = [];
        for (const photo in files) {
          const TYPE_PHOTO = String(files[photo].mimetype).slice(
            files[photo].mimetype.indexOf("/") + 1
          );
          const PATH_TO_PHOTO = `${UPLOAD_DIR}/${_idProd}/${_idProd}${counter}.${TYPE_PHOTO}`;
          counter++;
          files[photo].mv(PATH_TO_PHOTO);
          urlList.push(PATH_TO_PHOTO);
        }
        await Device.findOneAndUpdate({ _id: _idProd }, { img: urlList });
      });
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async changeProtosFromProduct(req, res) {
    const { _idProd } = req.query;
    const files = req.files;

    try {
      const UPLOAD_DIR = "photosProduct";
      const pathToDirPhotos = "./" + UPLOAD_DIR;
      fs.stat(pathToDirPhotos, function (err) {
        if (err) {
          fs.mkdirSync("./" + UPLOAD_DIR);
        }
      });
      const pathToDirPhotosProduct = "./" + UPLOAD_DIR + "/" + _idProd;
      fs.stat(pathToDirPhotosProduct, async function (err) {
        if (err) {
          fs.mkdirSync(pathToDirPhotosProduct);
        } else {
          rimraf(pathToDirPhotosProduct, function () {
            fs.mkdirSync(pathToDirPhotosProduct);
          });
        }
        let counter = 0;

        const urlList = [];
        for (const photo in files) {
          const TYPE_PHOTO = String(files[photo].mimetype).slice(
            files[photo].mimetype.indexOf("/") + 1
          );

          const PATH_TO_PHOTO = `${pathToDirPhotosProduct}/${_idProd}${counter}.${TYPE_PHOTO}`;
          counter++;
          files[photo].mv(PATH_TO_PHOTO);
          urlList.push(PATH_TO_PHOTO);
        }
        await Device.findOneAndUpdate({ _id: _idProd }, { img: urlList });
      });

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new AdminController();
