// Random name sur la homepage

const randomName = ['Beautiful', 'Master', 'Super Loutre', 'Sunshine', 'Nono', 'Cuty Pie', 'Super Castor', 'Butter Cup', 'Handsome', 'Muffin', 'Pumpkin', 'Kwazy Cupcake', 'Little Schtroumpf', 'Little One', 'to the Stongest', 'Petite Chose Mignonne', 'You']

function getRandomName() {
    return randomName[Math.floor(Math.random() * randomName.length)];

}

function displayRandomName() {
    document.getElementById('randomname').innerHTML = `<header>
        <h1 >Hello <span><em>${getRandomName()}</em></span> !</h1>
        <h2>Comment te sens-tu aujourd'hui ?</h2>
        <main>
            <div id="button-list">
                <a href="fiche.html?happy" class="button-mood">😁</a>
                <a href="fiche.html?sad" class="button-mood">😢</a>
                <a href="fiche.html?goofy" class="button-mood">🤪</a>
                <a href="fiche.html?in-love" class="button-mood">🥰</a>
                <a href="fiche.html?nerdy" class="button-mood">🤓</a>
                <a href="fiche.html?angry" class="button-mood">😡</a>
                <a href="fiche.html?surprise-me" class="button-mood">🎲</a>
            </div>
        </main>
    </header>`;
}

displayRandomName()