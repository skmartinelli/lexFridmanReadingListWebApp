document.addEventListener('DOMContentLoaded', function() {
    const books = ['1984 by George Orwell',
    'Hitchhiker’s Guide to the Galaxy by Douglas Adams',
    'Brave New World by Aldous Huxley',
    'The Stranger by Camus',
    'Meditations by Marcus Aurelius',
    'On the Road by Jack Kerouac',
    'Seven Brief Lessons on Physics by Carlo Rovelli',
    'The Art of War by Sun Tzu',
    'Old Man and The Sea by Hemingway',
    '2001: A Space Odyssey by Arthur C Clarke',
    'Animal Farm by George Orwell',
    'Man’s Search for Meaning by Victor Frankel',
    'Sapiens by Yuval Noah Harari',
    'Metamorphosis, Hunger Artist by Franz Kafka',
    'The Plague by Camus',
    'Player of Games by Ian Banks',
    'Fight Club by Chuck Palahniuk',
    'The Little Prince by Antoine de Saint-Exupéry',
    'Brothers Karamazov by Dostoevsky',
    'Siddhartha by Herman Hesse',
    'Dune by Frank Herbert',
    'Frankenstein by Mary Shelley',
    'Foundation by Isaac Asimov',
    'The Dead by James Joyce',
    'The Yellow Wallpaper by Charlotte Perkins Gilman',
    'Ward No. 6 by Anton Chekhov',
    'Anthem by Ayn Rand',
    'The Book of Five Rings by Miyamoto Musashi',
    'The Four Agreements by Don Miguel Ruiz',
    'Nightfall, Last Question by Isaac Asimov',
    'The Little Trilogy by Anton Chekhov',
    'The Nose, The Overcoat by Gogol',
    'Heart of Darkness by Joseph Conrad',
    'Notes from Underground by Dostoevsky',
    'The Giver by Lois Lowry',
    'The Prince by Machiavelli',
    'Disgrace by J. M. Coetzee',
    'Fahrenheit 451 by Ray Bradbury',
    'The Alchemist by Paulo Coelho',
    'The Road by Cormac McCarthy',
    'Where the Red Fern Grows by Wilson Rawls',
    'A Good Man Is Hard to Find by Flannery O’Connor',
    'Beyond Good and Evil by Friedrich Nietzsche',
    'On Writing by Stephen King',
    'Solaris by Stanislaw Lem',
    'Childhood’s End by Arthur C Clarke',
    'Do Androids Dream of Electric Sheep? by Philip K Dick',
    'Flowers for Algernon by Daniel Keyes',
    'I, Robot by Isaac Asimov',
    'The Diary of a Young Girl by Anne Frank',
    'Master and Margarita by Mikhail Bulgakov',
    'Ender’s Game by Orson Scott Card',
    'Surely You’re Joking, Mr. Feynman by Richard Feynman',
    'Dead Souls by Gogol',
    '12 Rules for Life by Jordan Peterson',
    'Snow Crash by Neal Stephenson',
    'The Moon Is a Harsh Mistress by Robert Heinlein',
    'Three-Body Problem by Cixin Liu',
    'Stranger in a Strange Land by Robert Heinlein',
    'Godel, Escher, Bach by Douglas R. Hofstadter',
    'The Idiot by Dostoevsky']; 
    const bookList = document.getElementById('bookList');


    const savedChecks = JSON.parse(localStorage.getItem('bookChecks')) || {};
    const savedHearts = JSON.parse(localStorage.getItem('bookHearts')) || {};

    books.forEach(book => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = book;
        checkbox.checked = savedChecks[book] || false;

        const heartSpan = document.createElement('span');
        heartSpan.className ='hearts'
        heartSpan.textContent = savedHearts[book] ? '❤️' : ' 🤍'; 
        heartSpan.style.cursor = 'pointer';
        heartSpan.addEventListener('click', function() {
            savedHearts[book] = !savedHearts[book];
            heartSpan.textContent = savedHearts[book] ? '❤️' : ' 🤍';
            localStorage.setItem('bookHearts', JSON.stringify(savedHearts));
        });

        const label = document.createElement('label');
        label.htmlFor = book;

        // Split the title and author, embolden titles
        const [title, author] = book.split(' by ');
        const titleSpan = document.createElement('span');
        titleSpan.style.fontWeight = 'bold';
        titleSpan.textContent = title;
        label.appendChild(titleSpan);
        if (author) {
            label.appendChild(document.createTextNode(' by ' + author));
        }

        const div = document.createElement('div');
        div.className = 'book-item';
        div.appendChild(checkbox);
        div.appendChild(heartSpan);
        div.appendChild(label);

        bookList.appendChild(div);

        checkbox.addEventListener('change', function() {
            savedChecks[book] = checkbox.checked;
            localStorage.setItem('bookChecks', JSON.stringify(savedChecks));
        });
    });
});