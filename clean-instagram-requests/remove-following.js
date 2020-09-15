// In profile page

let followingLink = "a.-nal3";
let followingPanel = "body > div.RnEpo.Yx5HN > div";
let contactsList = "body > div.RnEpo.Yx5HN > div > div > div.isgrP";
let allContactsSize = 1053;

const allowedCelebrities = [
  "hbredda",
  "joeljota",
  "thiago.nigro",
  "garyvee",
  "gabrielmoterani",
  "feed.do.luiz",
  "infomoney",
  "guilhermebenchimol",
  "gabrielaprioli",
  "ferragistacunha",
  "ascronicasdewesley",
  "remarkable",
  "vabo23",
  "jacquesvanier",
  "capitalresearchbr",
  "alfredosoares",
  "bruno.nardon",
  "ricbasaglia",
  "lucas.perfil",
  "startupdareal",
  "gestaoquatropontozero",
  "startuproots",
  "joaokepler",
  "startseoficial",
  "amurepinho",
  "tallisgomes",
  "acestartups",
  "lucasmontano",
  "icaro.decarvalho",
  "polichatbrasil",
  "rocketseat_oficial",
  "ceiufg",
  "gustavocaetano",
  "eusouomatt",
  "geracaodevalor",
  "gk.portraits",
  "a2rpodcast",
  "giovannaalimaa",
];
const allowedContact = [
  "ericojunior",
  "jairoritter",
  "gabrieldvt",
  "sam_devs",
  "percioluiz1668",
  "gabrielpato",
  "myllenaalbernaz_",
  "marina.lince",
  "joseaugustobsw",
  "biaebetinho",
  "valentinadpaula",
  "rauabdulhamid",
  "raquel_santarem",
  "siliadoleo",
  "p.a.u.l.a_c.r.u.z",
  "yuri.perim",
  "belsaraujo",
  "tiagoggranato",
  "gusrdr",
  "heitorsousan",
  "kennedyvieira.mkt",
  "leticiamorinaga",
  "guilhermefersantos",
  "arthurreymon",
  "viniaugribeiro",
  "marcelolange_",
  "daniel.augusto_99",
  "arthurscalzitti",
  "credsonjunior",
  "danielppagotto",
  "fredericoaugustocunha",
  "ju_laura",
  "gibadreddine",
  "paula_ribeirot",
  "lariasousa",
  "leticiabcoelho",
  "percireneeliane",
  "fredericoaugustocunha",
];

const allContacts = allowedCelebrities.concat(allowedContact);

openPanel = function () {
  document.querySelectorAll(followingLink)[1].click();

  let openedInterval = setInterval(() => {
    console.log("openedInterval");
    if (document.querySelector(followingPanel)) {
      clearInterval(openedInterval);
      requestMoreContacts();
    }
  }, 500);
};

requestMoreContacts = () => {
  console.log("Fui requerido!");

  //Carrega a lista de contatos
  let i = 0;
  setInterval(() => {
    loadAllRequests(i++);
  }, 10000);

  let j = 1;
  let deleteContacts = setInterval(() => {
    getContact(j++);

    if (j == allContactsSize) {
      clearInterval(deleteContacts);
    }
  }, 2000);
};

loadAllRequests = function (i) {
  loading = document.querySelector(contactsList);
  loading.scrollTo(0, 1000 * i);
};

getContact = (index) => {
  let contactField = document.querySelector(
    "body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(" +
      index +
      ")"
  );
  let name = contactField.innerText.split("\n")[0];

  if (!allContacts.includes(name)) {
    console.log("Deletar contato: " + name);
    deleteRequest(contactField);
  } else {
    console.log("Não deletar contato: " + name);
  }
};

deleteRequest = function (contactField) {
  let unfollowButton = contactField.querySelector(".sqdOP.L3NKy._8A5w5");
  let aux = false;

  let veryConfirmUnfollow = setInterval(() => {
    if (unfollowButton) {
      if (!aux) {
        unfollowButton.click();
        aux = true;
      }

      let confirmUnfollowPanel = document.querySelector(".piCib");
      if (confirmUnfollowPanel) {
        let cancel = document.querySelector("button.aOOlW.HoLwm");
        let confirm = document.querySelector("button.aOOlW.-Cab_");

        if (cancel) {
          confirm.click();
          clearInterval(veryConfirmUnfollow);
        }
      }
    }
  }, 1000);
};

openPanel();

// Then, load all page
delete lastScrollTop;
