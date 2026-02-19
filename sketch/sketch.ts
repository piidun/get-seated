interface PersonEntry {
    id: string;
    name: string;
    desc: string;
    sprite: keyof typeof Assets;
    img: string;
}

let airplane: Airplane;
let persons: Person[] = [];
let selectedType: PersonEntry | null = null;

const peopleData: PersonEntry[] = [
    { id: "Dudeson", name: "Dude Dudeson", desc: "Cool dude", sprite: "personDudeson", img: "assets/dudeson.png" },
    { id: "Janedoe", name: "Jane Doe", desc: "The Pilot", sprite: "personJanedoe", img: "assets/woman.png" }
];

function preload() {
    Assets.load();
}

function setup() {
    createCanvas(512, 512);
    init();
    renderCards();
}

function init() {
    airplane = new Airplane();
}

function renderCards() {
    const container = document.getElementById('card-group') as HTMLElement;
    if (!container) return;

    peopleData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `
            <img class="avatar" src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
        `;
        card.onclick = () => {
            document.querySelectorAll('.person-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedType = p; 
        };
        container.appendChild(card);
    });
}

function mouseClicked() {
    if (!selectedType) return;

    for (let seat of airplane.seats) {
        if (mouseX > seat.x && mouseX < seat.x + seat.width &&
            mouseY > seat.y && mouseY < seat.y + seat.height) {
            
            const occupied = persons.some(p => p.x === seat.x && p.y === seat.y);
            
            if (!occupied) {
                let p = new Person();
                p.x = seat.x;
                p.y = seat.y;
                p.name = selectedType.name;
                
                p.personSprite = (Assets as any)[selectedType.sprite] as p5.Image;
                persons = persons.filter(existing => existing.name !== p.name);
                persons.push(p);
            }
        }
    }
}

function draw() {
    background(26);
    airplane.draw();
    for (let person of persons) {
        person.draw();
    }
}