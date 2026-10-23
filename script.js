
let currentPage = 1;

const totalPages = 11;

let musicStarted = false;

const messages = {

    2:
`My child...

How are you?

I know you miss me.
I know there are moments when your heart searches for me.

Today is your birthday...
and I wanted to come close to you through these words.

I may not be sitting beside you,
but the love of a mother never becomes less.

My child, you will always be my little boy. ❤️`,

    3:
`Mama...

Today is my birthday.

Everyone is wishing me,
but my heart is searching for you.

I wish you were here.
I wish I could hear your voice.
I wish I could see your smile.

I miss you more than words can ever explain.

Mama, I still need you. ❤️`,

    4:
`My beloved son...

Do you know how happy I was
when you came into this world?

Allah Almighty blessed me with a beautiful blessing.

He gave me YOU.

The day I first held you,
my heart was filled with a happiness
I could never explain.

You were my little moon.
My precious child.
My beautiful blessing.

That day,
I became the happiest mother in the world. ❤️`,

    5:
`I still remember your little hands...

Your tiny face...
your innocent eyes...
your beautiful smile.

I used to hold you close to my chest
and protect you like the most precious thing in my life.

I wanted to keep every sadness away from you.

You were my happiness.

You were my little moon.

And no matter how old you became,
you would always be my little boy. 🌙❤️`,

    6:
`My child...

I loved you more than words could ever describe.

Your smile made me happy.

Your pain hurt me.

Your happiness was my happiness.

I prayed for you.
I worried about you.
I dreamed about your future.

And today,
I only want one thing...

I want you to live a beautiful life.

I want you to smile.

I want you to be happy. ❤️`,

    7:
`Happy Birthday, my beloved son. 🎂❤️

May Allah give you a long and beautiful life.

May every year of your life bring you closer to happiness.

May your heart always remain peaceful.

May Allah protect you from every difficulty.

And may you always remember...

You were,
you are,
and you will always be
one of the greatest blessings of my life.`,

    8:
`My child...

My dua for you is simple.

May Allah give you health.

May Allah give you happiness.

May Allah give you success.

May Allah protect you from every evil.

May Allah remove every sadness from your heart.

May Allah make every difficult road easy for you.

And may Allah bless you with thousands of beautiful moments.

Live a long,
healthy,
peaceful and happy life.

That is my prayer for you. 🤲❤️`,

    9:
`I know my absence hurts you.

I know there are birthdays,
special days,
and difficult nights
when you wish I was beside you.

My child...

Don't let my absence destroy your happiness.

Allah's decision is greater than our wishes.

I did not want to leave you.

But Allah called me.

So don't spend your life only crying for me.

Live.

Smile.

Achieve your dreams.

And whenever you remember me...

Make a dua for me. ❤️`,

    10:
`Yes, my child...

Whenever you remember me,
remember my love.

Whenever you feel alone,
look at the sky and make dua.

Whenever you achieve something,
remember that your mother would have been proud of you.

I may not be able to hold your hand anymore...

But the memories of my love
will always remain inside your heart.

So please...

Don't be sad.

Be happy.

Live beautifully.

Because that is what I would want for you. ❤️`,

    11:
`If I could come back for just one moment...

I would hold you close to my chest
just like I did when you were little.

I would look into your eyes
and tell you...

"My child,
I am so proud of you."

You will always be my little boy.

You will always be my precious blessing.

Happy Birthday, my son.

May Allah give you a life full of
health, happiness, peace and love.

And never forget...

You are loved.

Always. ❤️`
};


function nextPage() {

    const current = document.getElementById(
        "page" + currentPage
    );

    current.classList.remove("active");

    currentPage++;

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const next = document.getElementById(
        "page" + currentPage
    );

    next.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    startMusic();

    typeMessage(currentPage);
}


/* ---------------- TYPING EFFECT ---------------- */

function typeMessage(pageNumber) {

    const element = document.getElementById(
        "text" + pageNumber
    );

    if (!element) return;

    const message = messages[pageNumber];

    if (!message) return;

    element.innerHTML = "";

    let index = 0;

    const speed = 28;

    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, speed);

        }

    }

    type();
}


/* ---------------- MUSIC ---------------- */

function startMusic() {

    const music =
        document.getElementById("bgMusic");

    if (!musicStarted) {

        music.volume = 0.35;

        music.play().catch(() => {});

        musicStarted = true;
    }
}


/* ---------------- RESTART ---------------- */

function restartStory() {

    const current =
        document.getElementById(
            "page" + currentPage
        );

    current.classList.remove("active");

    currentPage = 1;

    const first =
        document.getElementById("page1");

    first.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ---------------- FALLING HEARTS ---------------- */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    const symbols = [
        "❤️",
        "💕",
        "🌸",
        "🌹",
        "✨"
    ];

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        (12 + Math.random() * 18) + "px";

    particle.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    document
        .getElementById("particles")
        .appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 13000);
}

setInterval(createParticle, 450);


/* ---------------- FIRST PAGE ---------------- */

window.addEventListener("load", function () {

    typeMessage(1);

});
