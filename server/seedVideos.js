import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Video from "./models/Video.js";

dotenv.config();

connectDB();

const videos = [

    {
        title: "React Complete Course",
        description: "Learn React from Beginner to Advanced",
        thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        duration: 4200
    },

    {
        title: "Node.js Crash Course",
        description: "Build Backend APIs using Express.js",
        thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        duration: 3600
    },

    {
        title: "MongoDB Full Course",
        description: "Learn MongoDB Database",
        thumbnail: "https://i.ytimg.com/vi/ExcRbA7fy_A/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        duration: 5400
    },

    {
        title: "JavaScript Full Course",
        description: "Complete JavaScript Tutorial",
        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        duration: 12600
    },

    {
        title: "HTML & CSS Crash Course",
        description: "Learn HTML5 and CSS3",
        thumbnail: "https://i.ytimg.com/vi/mU6anWqZJcc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=mU6anWqZJcc",
        duration: 7200
    },

    {
        title: "Express.js Tutorial",
        description: "Build REST APIs using Express",
        thumbnail: "https://i.ytimg.com/vi/L72fhGm1tfE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE",
        duration: 4500
    },

    {
        title: "Git & GitHub Tutorial",
        description: "Version Control from Scratch",
        thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        duration: 4200
    },

    {
        title: "Python for Beginners",
        description: "Complete Python Programming",
        thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
        duration: 21600
    },

    {
        title: "Django Full Course",
        description: "Learn Django Web Development",
        thumbnail: "https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
        duration: 12600
    },

    {
        title: "Tailwind CSS Tutorial",
        description: "Responsive UI using Tailwind",
        thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
        duration: 5400
    },

    {
        title: "TypeScript Crash Course",
        description: "Learn TypeScript Basics",
        thumbnail: "https://i.ytimg.com/vi/30LWjhZzg50/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=30LWjhZzg50",
        duration: 4800
    },

    {
        title: "Next.js Full Tutorial",
        description: "Build Modern React Apps",
        thumbnail: "https://i.ytimg.com/vi/Sklc_fQBmcs/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
        duration: 7200
    },

    {
        title: "SQL Complete Course",
        description: "SQL Database Fundamentals",
        thumbnail: "https://i.ytimg.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        duration: 7200
    },

    {
        title: "Bootstrap 5 Tutorial",
        description: "Responsive Website Design",
        thumbnail: "https://i.ytimg.com/vi/-qfEOE4vtxE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=-qfEOE4vtxE",
        duration: 5400
    },

    {
        title: "Data Structures in Java",
        description: "Stacks, Queues, Trees and Graphs",
        thumbnail: "https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
        duration: 18000
    },

    {
        title: "Artificial Intelligence Fundamentals",
        description: "Introduction to AI concepts, applications, and intelligent systems.",
        thumbnail: "https://i.ytimg.com/vi/JMUxmLyrhSk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
        duration: 7200
    },

    {
        title: "Machine Learning Full Course",
        description: "Machine Learning algorithms using Python.",
        thumbnail: "https://i.ytimg.com/vi/GwIo3gDZCVQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=GwIo3gDZCVQ",
        duration: 10800
    },

    {
        title: "Deep Learning Crash Course",
        description: "Neural Networks, TensorFlow and Keras.",
        thumbnail: "https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
        duration: 5400
    },

    {
        title: "Data Science with Python",
        description: "NumPy, Pandas, Matplotlib and Scikit-learn.",
        thumbnail: "https://i.ytimg.com/vi/r-uOLxNrNk8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
        duration: 9000
    },

    {
        title: "Python Programming",
        description: "Complete Python programming for beginners.",
        thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
        duration: 21600
    },

    {
        title: "Java Programming Masterclass",
        description: "Core Java programming from beginner to advanced.",
        thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        duration: 14400
    },

    {
        title: "React.js Complete Course",
        description: "Build modern web applications using React.",
        thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        duration: 12600
    },

    {
        title: "Node.js & Express",
        description: "Backend development with Node.js and Express.",
        thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        duration: 8400
    },

    {
        title: "MongoDB Complete Tutorial",
        description: "NoSQL database development using MongoDB.",
        thumbnail: "https://i.ytimg.com/vi/ExcRbA7fy_A/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        duration: 7200
    },

    {
        title: "SQL Database Course",
        description: "Master SQL queries and relational databases.",
        thumbnail: "https://i.ytimg.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        duration: 7200
    },

    {
        title: "Django Web Development",
        description: "Build powerful web applications using Django.",
        thumbnail: "https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
        duration: 10800
    },

    {
        title: "AWS Cloud Practitioner",
        description: "Amazon Web Services Cloud Fundamentals.",
        thumbnail: "https://i.ytimg.com/vi/SOTamWNgDKc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=SOTamWNgDKc",
        duration: 9000
    },

    {
        title: "Docker & Kubernetes",
        description: "Containerization and orchestration using Docker & Kubernetes.",
        thumbnail: "https://i.ytimg.com/vi/X48VuDVv0do/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
        duration: 9600
    },

    {
        title: "DevOps Full Course",
        description: "CI/CD, Jenkins, Docker, Kubernetes and DevOps tools.",
        thumbnail: "https://i.ytimg.com/vi/9pZ2xmsSDdo/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=9pZ2xmsSDdo",
        duration: 10800
    },

    {
        title: "Git & GitHub Complete Guide",
        description: "Version control using Git and GitHub.",
        thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        duration: 5400
    }

];

const seed = async () => {

    try {

        await Video.deleteMany();

        await Video.insertMany(videos);

        console.log("Videos Inserted Successfully");

        mongoose.connection.close();

    }

    catch (err) {

        console.log(err);

        mongoose.connection.close();

    }

};

seed();