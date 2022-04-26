const data = [
    {
        name: 'James Charles',
        age: 25,
        city: 'New York',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },

    {
        name: 'Robert Joshua',
        age: 49,
        city: 'Ottawa, Canada',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/21.jpg'
    },

    {
        name: 'Nancy Ava',
        age: 18,
        city: 'Windsor, Canada',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/27.jpg'
    },

    {
        name: 'Isabella Saum',
        age: 32,
        city: 'Tennesse, USA',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/40.jpg'
    },

    {
        name: 'Cristian Kenneth',
        age: 34,
        city: 'Bogotá, Colombia',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Nombre ${currentCandidate.name}</li>
    <li class="list-group-item">Tiene ${currentCandidate.age} años</li>
    <li class="list-group-item">Reside en ${currentCandidate.city}</li>
    <li class="list-group-item">Se especializa principalmente en ${currentCandidate.language}</li>
    <li class="list-group-item">Trabaja en el framework ${currentCandidate.framework}</li>
  </ul>`;
    }
    else{
        alert('Fin de la lista de candidatos');
        window.location.reload();
    }

}