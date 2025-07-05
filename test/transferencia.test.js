const request = require('supertest')
const { expect } = require("chai")
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferencias', () => {
    let token

        beforeEach( async () => {
            token = await obterToken('julio.lima', '123456')
        })
    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
                expect(resposta.status).to.equal(201);

                //console.log(resposta.body)
        }),
        it('Deve retornar sucesso com 402 quando o valor da transferencia for abaixo de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
                expect(resposta.status).to.equal(422);

        })
    })
    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao resgistro de transferencia contido no banco de dados quando o ID for válido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/16')
                .set('Authorization', `Bearer ${token}`)

            console.log(resposta.status)
            console.log(resposta.body)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(16)
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equals(1)
            expect(resposta.body.conta_destino_id).to.equals(2)
            expect(resposta.body.valor).to.equals(11.00)
        })
    })
    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na pagina quando informar 10 limites', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

            console.log(resposta.body)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)

            
        })
    })
})