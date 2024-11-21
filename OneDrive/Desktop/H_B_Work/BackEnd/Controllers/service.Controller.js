import { DesignModel } from "../Models/Designs.Schema.js";
import { FurnitureModel } from "../Models/Furniture.Schema.js";
import { InteriorWorkModel } from "../Models/Interior.Schema.js";
import { KitchenModel } from "../Models/Kitchen.Schema.js";
import  ProjectModel  from "../Models/Project.Schema.js";
import { SofaWorkModel } from "../Models/Sofa.Schema.js";
import { uploadImageToCloudinary } from "../Utils/cloudinary.db.js";


// This Section is only for project routes related ::
export const addingNewProjectController = async (req, res)=>{
    const {projectTitle, projectSiteName, projectAddress,projectDetails, clientReview, completionDuration} = req.body;
    try {
        if(!projectTitle || !projectSiteName || !projectAddress || !projectDetails || !completionDuration) {
            console.log(projectTitle, projectSiteName, projectAddress,projectDetails, clientReview, completionDuration);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
        const projectUploaded = await ProjectModel.create({projectTitle, projectSiteName, projectAddress,projectDetails, clientReview, completionDuration, projectPhotos:uploadResults});
        return res.status(201).json({message:"New Project has successfully added", projectData:projectUploaded});
    } catch (error) {
        console.log("There are some errors in your addingNewProjectController so plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewProjectController so plz fix the bug first ", error});
    }
}
export const projectDetailsUpdatingController = async (req, res)=>{
    const {projectTitle, projectSiteName, projectAddress,projectDetails, clientReview, completionDuration} = req.body;
    const projectId = req.params.id;
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, {projectTitle, projectSiteName, projectAddress,projectDetails, clientReview, completionDuration});
        return res.status(201).json({message:"Your Project Details has been successfully updated ", project:updatedProject});
    } catch (error) {
        console.log("There are some errors in your projectDetailsUpdatingController controller plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your projectDetailsUpdatingController controller plz fix the bug first ", error});
    }
}
export const projectDeletingController = async (req, res)=>{
    const projectID = req.params.id;
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(projectID);
        return res.status(200).json({message:"Project has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your projectDeletingController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your projectDeletingController plz fix the bug first ", error});
    }
}
export const getAllUploadedProjects = async (req, res)=>{
    try {
        const allProjects = await ProjectModel.find();
        return res.status(200).json({allProjects});
    } catch (error) {
        console.log("There are some errors in your getAllUploadedProjects controller plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your getAllUploadedProjects controller plz fix the bug first ", error});
    }
}

export const addingNewSofaProjectController = async (req, res)=>{
    const {clientName,sofaName,sofaDetails} = req.body;
    try {
        if(!clientName || !sofaName || !sofaDetails) {
            console.log(clientName,sofaName,sofaDetails);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
          const uploadedSofa = await SofaWorkModel.create({clientName,sofaName,sofaDetails, sofaImages:uploadResults});
          return res.status(201).json({message:"New Sofa Project Uploaded", uploadedSofa});
    } catch (error) {
        console.log("There are some errors in your addingNewSofaProjectController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewSofaProjectController plz fix the bug first ", error});
    }
}
export const updateSofaProjectDetails = async (req, res)=>{
    const {clientName,sofaName,sofaDetails} = req.body;
    const sofaId = req.params.id;
    try {
        if(!clientName || !sofaName || !sofaDetails) {
            console.log(clientName,sofaName,sofaDetails);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const updatedSofaDetails = await SofaWorkModel.findByIdAndUpdate(sofaId, {clientName,sofaName,sofaDetails});
        return res.status(201).json({message:"Your Sofa Details has been successfully updated ", updatedSofaDetails});
    } catch (error) {
        console.log("There are some errors in your updateSofaProjectDetails plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your updateSofaProjectDetails plz fix the bug first ", error});
    }
}
export const sofaDeletingController = async (req, res)=>{
    const sofaID = req.params.id;
    try {
        const deletedSofa = await SofaWorkModel.findByIdAndDelete(sofaID);
        return res.status(200).json({message:"Your Sofa Project has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your sofaDeletingController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your sofaDeletingController plz fix the bug first ", error});
    }
}
export const getAllSofaProjects = async (req, res)=>{
    try {
        const allSofaProjects = await SofaWorkModel.find();
        return res.status(200).json({allSofaProjects});
    } catch (error) {
        console.log("There are some errors in your getAllSofaProjects plz fix the bug first " , error);
        return res.status(500).json({message:"There are some errors in your getAllSofaProjects plz fix the bug first " , error});
    }
}
export const addingNewInteriorServiceController = async (req, res)=>{
    const {clientName, interiorTitle, interiorDetails, clientReview} = req.body;
    try {
        if(!interiorTitle || !interiorDetails) {
            console.log(clientName, interiorTitle, interiorDetails, clientReview);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
          const uploadedInteriorProject = await InteriorWorkModel.create({clientName, interiorTitle, interiorDetails, clientReview, interiorImages:uploadResults});
          return res.status(201).json({message:"Congratulations your interior project has been successfully uploaded ", uploadedInteriorProject});
    } catch (error) {
       console.log("There are some errors in your addingNewInteriorServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewInteriorServiceController plz fix the bug first ", error});
    }
}
export const updatePrevInteriorServiceController = async (req, res)=>{
    const {clientName, interiorTitle, interiorDetails, clientReview} = req.body;
    const projectID = req.params.id;
    try {
        if(!interiorTitle || !interiorDetails) {
            console.log(clientName, interiorTitle, interiorDetails, clientReview);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const updatedInteriorService = await InteriorWorkModel.findByIdAndUpdate(projectID, {clientName, interiorTitle, interiorDetails, clientReview});
        return res.status(201).json({message:"Your Interior Service has been successfully updated ", updatedInteriorService});
    } catch (error) {
        console.log("There are some errors in your updatePrevInteriorServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your updatePrevInteriorServiceController plz fix the bug first ", error});
    }
}
export const deletingInteriorProjectController = async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedInteriorService = await InteriorWorkModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Your project has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your deletingInteriorProjectController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your deletingInteriorProjectController plz fix the bug first ", error});
    }
}
export const getAllInteriorServicesProjects = async (req, res)=>{
    try {
        const getAllInteriorServices = await InteriorWorkModel.find();
        return res.status(200).json({getAllInteriorServices});
    } catch (error) {
        console.log("There are some errors in your getAllInteriorServicesProjects plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your getAllInteriorServicesProjects plz fix the bug first ", error});
    }
}
export const addingNewDesigningServicesController = async (req, res)=>{
    const {designName, designCategory, designDetails, designerName} = req.body;
    try {
        if(!designName || !designCategory || !designDetails) {
            console.log(designName, designCategory, designDetails, designerName);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
          const uploadedNewDesign = await DesignModel.create({designName, designCategory, designDetails, designerName, designImages:uploadResults});
          return res.status(201).json({uploadedNewDesign});
    } catch (error) {
        console.log("There are some errors in your addingNewDesigningServicesController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewDesigningServicesController plz fix the bug first ", error});
    }
}
export const updatingPrevDesigningServices = async (req, res)=>{
    const {designName, designCategory, designDetails, designerName} = req.body;
    const designID = req.params.id;
    try {
        const updatedDesignDetails = await DesignModel.findByIdAndUpdate(designID, {designName, designCategory, designDetails, designerName});
        return res.status(201).json({updatedDesignDetails});
    } catch (error) {
        console.log("There are some errors in your updatingPrevDesigningServices plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your updatingPrevDesigningServices plz fix the bug first ", error});
    }
}
export const deletePrevDesignController = async (req, res)=>{
    const designID = req.params.id;
    try {
        const deletedDesign = await DesignModel.findByIdAndDelete(designID);
        return res.status(200).json({message:"Your Design has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your deletePrevDesignController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your deletePrevDesignController plz fix the bug first ", error});
    }
}
export const getAllDesignController = async (req, res)=>{
    try {
        const getAllDesigns = await DesignModel.find();
        return res.status(200).json({getAllDesigns});
    } catch (error) {
        console.log("There are some errors in your getAllDesignController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your getAllDesignController plz fix the bug first ", error});
    }
}
export const addingNewFurnitureServiceController = async (req, res)=>{
    const {clientName,furnitureName,furnitureType,furnitureDetails,priceRange} = req.body;
    try {
        if(!furnitureName || !furnitureType || !furnitureDetails || !priceRange) {
            console.log(clientName,furnitureName,furnitureType,furnitureDetails,furnitureImages,priceRange);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
          const addedFurniture = await FurnitureModel.create({clientName,furnitureName,furnitureType,furnitureDetails,furnitureImages:uploadResults,priceRange});
          return res.status(201).json({addedFurniture});
    } catch (error) {
        console.log("There are some errors in your addingNewFurnitureServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewFurnitureServiceController plz fix the bug first ", error});
    }
}
export const UpdatePrevFurnitureServiceController = async (req, res)=>{
    const {clientName,furnitureName,furnitureType,furnitureDetails,priceRange} = req.body;
    const id = req.params.id;
    try {
        if(!furnitureName || !furnitureType || !furnitureDetails || !priceRange) {
            console.log(clientName,furnitureName,furnitureType,furnitureDetails,furnitureImages,priceRange);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const updatedFurnitureDetails = await FurnitureModel.findByIdAndUpdate(id, {clientName,furnitureName,furnitureType,furnitureDetails,priceRange});
        return res.status(201).json({updatedFurnitureDetails});
    } catch (error) {
        console.log("There are some errors in your UpdatePrevFurnitureServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your UpdatePrevFurnitureServiceController plz fix the bug first ", error});
    }
}
export const deletePrevFurnitureServiceController = async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedFurnitureService = await FurnitureModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Your Furniture Service has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your deletePrevFurnitureServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your deletePrevFurnitureServiceController plz fix the bug first ", error});
    }
}
export const getAllFurnitureServiceController = async (req, res)=>{
    try {
        const getAllFurnitureService = await FurnitureModel.find();
        return res.status(200).json({getAllFurnitureService});
    } catch (error) {
        console.log("There are some errors in your getAllFurnitureServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your getAllFurnitureServiceController plz fix the bug first ", error});
    }
}
export const addingNewModuloKitchenServiceController = async (req, res)=>{
    const {clientName,kitchenName,kitchenDetails, priceRange} = req.body;
    try {
        if(!kitchenName || !kitchenDetails || !priceRange) {
            console.log(clientName,kitchenName,kitchenDetails);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const uploadPromises = req.files.map((file, index) => {
            return uploadImageToCloudinary(file, index);
          });
          const uploadResults = await Promise.all(uploadPromises);
          const addedKitchenProject = await KitchenModel.create({clientName,kitchenName,kitchenDetails,kitchenImages:uploadResults, priceRange});
          return res.status(201).json({addedKitchenProject});
    } catch (error) {
        console.log("There are some errors in your addingNewModuloKitchenServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your addingNewModuloKitchenServiceController plz fix the bug first ", error});
    }
}
export const updatingPrevModuloKitchenServiceController = async (req, res)=>{
    const id = req.params.id;
    const {clientName,kitchenName,kitchenDetails, priceRange} = req.body;
    try {
        if(!kitchenName || !kitchenDetails || !priceRange) {
            console.log(clientName,kitchenName,kitchenDetails,priceRange);
            return res.status(400).json({message:"Invalid Credentials all fields are required"});
        }
        const updatedKitchenDetails = await KitchenModel.findByIdAndUpdate(id, {clientName,kitchenName,kitchenDetails, priceRange});
        return res.status(201).json({updatedKitchenDetails});
    } catch (error) {
        console.log("There are some errors in your updatingPrevModuloKitchenServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your updatingPrevModuloKitchenServiceController plz fix the bug first ", error}); 
    }
}
export const deletingPrevModuloKitchenServiceController = async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedKitchenProj = await KitchenModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Your Kitchen Project has been successfully deleted"});
    } catch (error) {
        console.log("There are some errors in your deletingPrevModuloKitchenServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your deletingPrevModuloKitchenServiceController plz fix the bug first ", error}); 
    }
}
export const getAllModuloKitchenServiceController = async (req, res)=>{
    try {
        const getAllKitchenProjects = await KitchenModel.find();
        return res.status(200).json({getAllKitchenProjects});
    } catch (error) {
        console.log("There are some errors in your getAllModuloKitchenServiceController plz fix the bug first ", error);
        return res.status(500).json({message:"There are some errors in your getAllModuloKitchenServiceController plz fix the bug first ", error}); 
    }
}
