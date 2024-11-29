import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IProject } from "@/interfaces/Ifirebase";

export const addProject = async (projectData: IProject) => {
  try {
    await addDoc(collection(db, "projects"), projectData);
  } catch (error) {
    console.log("Error creating project", error);
  }
};

export const fetchProjects = async (): Promise<IProject[]> => {
  try {
    const projectsCollection = collection(db, "projects");

    const snapshot = await getDocs(projectsCollection);

    const projects: IProject[] = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as IProject)
    );

    return projects;
  } catch (error) {
    console.log("Error fetching projects", error);
    return [];
  }
};
