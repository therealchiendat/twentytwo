import { aboutString } from "../../components/strings";
import './About.css'

export default function About() {
    return (
        <div className="About">
            {aboutString.map(r => <div className="about-item">
                <h1>{r.title}</h1>
                <p>{r.text}</p>
            </div>)}
        </div>
    );
}