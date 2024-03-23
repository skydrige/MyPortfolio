import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { SiHackthebox } from "react-icons/si";
import Preloader from "../Pre";
import { useEffect, useState } from "react";

function ProjectCards(props) {
    const [load, updateLoad] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);
        
        return () => clearTimeout(timer);
    }, []);
    return (
        <Card className="project-card-view">
            <Preloader load={load} />
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.htbLink} target="_blank">
                    <SiHackthebox /> &nbsp;
                    {props.isBlog ? "Blog" : "HackTheBox"}
                </Button>
                {"\n"}
                {"\n"}
                
                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
                
                {/*{!props.isBlog && props.demoLink && (*/}
                {/*    <Button*/}
                {/*        variant="primary"*/}
                {/*        href={props.demoLink}*/}
                {/*        target="_blank"*/}
                {/*        style={{ marginLeft: "10px" }}*/}
                {/*    >*/}
                {/*        <CgWebsite /> &nbsp;*/}
                {/*        {"Demo"}*/}
                {/*    </Button>*/}
                {/*)}*/}
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
