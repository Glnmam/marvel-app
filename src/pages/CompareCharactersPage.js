import React from 'react';



var data = require('../data/characters.json');

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const characters = data.map((character) => character.name)
    //const thumb = data.map((thumb) => thumb.thumbnail.path)
    //const ext =data.map((ext) => ext.thumbnail.extension)
    //const liens_ext = data.map((le) => le.thumbnail)

    //const liens = thumb.map((lien, index) => ({
        //value: index,
        //label: lien,
    //}));
    //const liens_extensions = thumb.map((liens_exts, index) => ({
        //value: index,
        //label: liens_exts,
    //}));
    //const extensions = ext.map((extension, index) => ({
        //value: index,
        //label: extension,
    //}));
    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    
    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                {characters[option1.value]} vs {characters[option2.value]}
            </p>
            {
               //characters[option1.label].liens_extensions[option1.label] && <img src={`${characters[option1.label].liens[option1.label]}/standard_large.${characters[option1.label].extensions[option1.label]}`} alt={characters[option1.label]} />
            }
        </>
    );
};

/*<RadarChart outerRadius={90} width={730} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name= {[option1.label]} dataKey={data.capacities} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name={[option2.label]} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>*/
export default CompareCharactersPage;