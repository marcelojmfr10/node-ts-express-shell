

const currentTicketlbl = document.querySelector('span');
const createTicketbtn = document.querySelector('button');

async function getLastTicket() {
    const lastTicket = await fetch('/api/ticket/last').then(res => res.json());
    currentTicketlbl.innerText = lastTicket;
}

async function createTicket() {
    const newTicket = await fetch('/api/ticket', {
        method: 'POST'
    }).then(resp => resp.json());

    currentTicketlbl.innerText = newTicket.number;
}

createTicketbtn.addEventListener('click', createTicket);

getLastTicket();