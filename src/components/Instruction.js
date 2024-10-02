import './Instruction.css'

function Instruction() {
    return (
        <div className='Instruction'>
            <header className='Instruction-header'>
                <h1>How to Use Spotify Hours</h1>
                <br></br>
                    <ol style={{textAlign:'left'}}>
                        <li>Log onto your Spotify account on the home page. Don't worry, your privacy is secure!</li>
                        <li>View each metric by using your mouse to toggle between them.</li>
                        <li>If you would like to see your results for past years, select it in the year dropdown to the left.</li>
                        <li>For the curation of the album that best represents your year, press the create album button!</li>
                    </ol>
            </header>
        </div>
    );
}

export default Instruction;
