import { makeAutoObservable } from 'mobx'
import AuthService from "../service/AuthService";
import axios from 'axios';
import { API_URL } from '../http';
import UserService from '../service/UserService';

export default class Store {
    user = {}
    isAuth = false
    isLoading = false
    isCSRF = null
    isReader = true
    pinBookStatus = 0
    createReviewStatus = 0
    addToFavoritesStatus = 0
    status = 0

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
        console.log(user)
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async login(username, password) {
        this.setLoading(true)
        try {
            const response = await AuthService.login(username, password)
            console.log(response)
            localStorage.setItem('auth_token', response.data.auth_token)
            this.getUser(localStorage.getItem('auth_token'))
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }

    async registration(username, firstname, lastname, password) {
        this.setLoading(true)
        try {
            const response = await AuthService.registration(username, firstname, lastname, password)
            console.log(response)
            localStorage.setItem('auth_token', response.data.auth_token)
            this.getUser(localStorage.getItem('auth_token'))
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('auth_token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async getUser(auth_token) {
        try {
            const response = await AuthService.getUser(auth_token)
            console.log(response)
            this.setUser(response.data)
            console.log(response.data.groups[0].name)
            if (response.data.groups[0].name === ('Reader')) {
                this.isReader = true
            } else {
                this.isReader = false
            }
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async pinBook(bookId, readerId) {
        try {
            const auth_token = localStorage.getItem('auth_token')
            const response = await UserService.pinBook(bookId, readerId, auth_token)
            console.log(response)
            this.pinBookStatus = 200
        } catch (e) {
            this.pinBookStatus = 400
            console.log(e.response?.data?.message)
        }
    }

    async createReview(rating, name, text, author, book) {
        try {
            const auth_token = localStorage.getItem('auth_token')
            const response = await UserService.createReview(rating, name, text, author, book, auth_token)
            console.log(response)
            this.createReviewStatus = 200
        } catch (e) {
            this.createReviewStatus = 400
            console.log(e.response?.data?.message)
        }
    }

    async addToFavorites(reader, book) {
        try {
            const auth_token = localStorage.getItem('auth_token')
            const response = await UserService.addToFavorites(reader, book, auth_token)
            console.log(response)
            this.addToFavoritesStatus = 200
        } catch (e) {
            this.addToFavoritesStatus = 400
            console.log(e.response?.data?.message)
        }
    }
}