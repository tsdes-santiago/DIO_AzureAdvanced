const skill_items = {
    "Python": "devicon-python-plain-wordmark",
    "PyTorch": "devicon-pytorch-original",
    "Scikit-Learn": "devicon-scikitlearn-plain",
    "Pandas": "devicon-pandas-plain-wordmark",
    "FastAPI": "devicon-fastapi-plain",
    "Docker": "devicon-docker-plain-wordmark",
    "MongoDB": "devicon-mongodb-plain-wordmark",
    "PostgreSQL": "devicon-postgresql-plain-wordmark",
    "HTML": "devicon-html5-plain-wordmark",
    "CSS": "devicon-css3-plain-wordmark",
    "JavaScript": "devicon-javascript-plain",
    "LaTeX": "devicon-latex-original",
    "Arch Linux": "devicon-archlinux-plain",
}

const skill_list = document.querySelector(".skills__list")
for (const [key, value] of Object.entries(skill_items)) {
    skill_list.innerHTML += `<li class="skills__item">
    <i class="${value}"></i>
    </li>`
}

function toggleSkills(element) {
    title_icon = element.querySelector("i")
    title_icon.classList.toggle('bi-chevron-compact-up');
    title_icon.classList.toggle('bi-chevron-compact-down');
    element.querySelector(".section__content").classList.toggle("open");
}