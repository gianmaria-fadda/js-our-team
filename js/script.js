// DATI PER ESERCIZIO:

// Name            Role                    Image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },

];

console.log('ourTeam', ourTeam, typeof ourTeam);

const teamContainer = document.getElementById('team-container')

for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i]);

    console.log('Name:', ourTeam[i].name);
    console.log('Role:', ourTeam[i].role);
    console.log('Image:', ourTeam[i].image);

    teamContainer.innerHTML += `
    <ul>
        <li>
            Name: <strong>${ourTeam[i].name}</strong>
        </li>
        <li>
            Role: <strong>${ourTeam[i].role}</strong>
        </li>
        <li>
            Image:
        </li>
    </ul>

    <hr>
    `;
}