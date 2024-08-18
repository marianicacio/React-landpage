import "./styles.css"
import MainImg from "../../imgs/Placeholder Image.svg"

export default function Main() {
    return (
        <main>
            <h1>Resonate with the visitor's problem</h1>
            <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
            <div className="align">
            <input type="text" name="Enter your email" id="email" value={"Enter your email"} /><button>Try it for free</button>
            </div>
            <div className="align-p">
                <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
            </div>
            <div className="img">
                <img src={MainImg} alt="" />
            </div>
        </main >
    )
}