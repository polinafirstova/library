import React, { useRef, useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import UserService from '../service/UserService'
import Path from '../components/Path'
import Button from '../components/Button'
import ReviewItem from '../components/ReviewItem'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Modal from '../components/Modal'
import useScrollBar from '../hooks/use-scrollBar'
import Input from '../components/Input'
import UseGetArray from '../hooks/use-getArray'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default observer(function Book() {
    const { store } = useContext(Context)

    const isReader = store.isReader

    // const { id } = useParams()
    // const [book, setBook] = useState(null)

    // useEffect(() => {
    //     async function getBook() {
    //         try {
    //             const response = await UserService.getBook(id)
    //             setBook(response.data)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }

    //     if (!book) {
    //         getBook()
    //     }
    // }, [id, book])

    const book = {
        title: "Название книги",
        description: "Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur.",
        image: "",
        genres: ['Жанр 1', 'Жанр 2', 'Жанр 3', 'Жанр 4', 'Жанр 5'],
        tags: ['Тег 1', 'Тег 2', 'Тег 3', 'Тег 4', 'Тег 5'],
        author: "Имя автора",
        status: "Свободно",
        rating: 5.0,
        reviews: [{
            id: 1,
            rating: 5.0,
            text: 'Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.\nLorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.\nLorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.',
            comments: 0,
            image: '',
            author: { last_name: 'Имя автора', first_name: '' },
            like: 2,
            dislike: 2
        },
        {
            id: 2,
            rating: 5.0,
            text: 'Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.\nLorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.\nLorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.',
            comments: 0,
            image: '',
            author: { last_name: 'Имя автора', first_name: '' },
            like: 1,
            dislike: 2
        },
        {
            id: 3,
            rating: 5.0,
            text: 'Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.\nLorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut.',
            comments: 1,
            image: '',
            author: { last_name: 'Имя автора', first_name: '' },
            like: 2,
            dislike: 1
        },],
        copies: 10
    }

    const [modalActivePinBook, setModalActivePinBook] = useState(false)
    const [modalActiveReview, setModalActiveReview] = useState(false)
    const [modalActivePinBookStatus, setModalActivePinBookStatus] = useState(false)
    const [modalActiveCreateReviewStatus, setModalActiveCreateReviewStatus] = useState(false)
    const [modalActiveAddToFavoritesStatus, setModalActiveAddToFavoritesStatus] = useState(false)
    let pinBookStatus = store.pinBookStatus
    let createReviewStatus = store.createReviewStatus
    let addToFavoritesStatus = store.addToFavoritesStatus

    const [readers, setReaders] = //UseGetArray('api/v1/books/readers')
        useState([
            { id: 1, last_name: 'kjnj' },
            { id: 2, last_name: 'kjnj' },
            { id: 3, last_name: 'kjnj' },
            { id: 4, last_name: 'kjnj' },
            { id: 5, last_name: 'kjnj' },
            { id: 6, last_name: 'kjnj' }
        ])

    const [value, setValue] = useState('')
    const [selectedItems, setSelectedItems] = useState(0)
    let hasScroll = false
    const filters = useRef(null)

    if (!isReader) {
        hasScroll = readers.length > 5
    }

    useScrollBar(filters, hasScroll)

    const filter = readers.filter(el => {
        return el.last_name?.toLowerCase()?.includes(value.toLowerCase()) || el.first_name?.toLowerCase()?.includes(value.toLowerCase())
    })

    async function handleCheckboxChange(el) {
        const promise = new Promise((resolve) => {
            if (selectedItems !== el) {
                setSelectedItems(el)
                const interval = setInterval(() => {
                    if (selectedItems === el) {
                        clearInterval(interval)
                        resolve()
                    }
                }, 100)
            }
        })
        await promise
        console.log(selectedItems)
    }

    const [text, setText] = useState('')
    const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [selectedStars, setSelectedStars] = useState(0)

    return (
        <>
            {book !== null &&
                <div>
                    <Path current={book.title} />
                    <div className='book-description'>
                        <img src={book.image} width={360} height={540} className='book-description-img' />
                        <div>
                            <div className='book-description-head'>
                                <div className='book-description-params'>
                                    <h1 className='book-title'>{book.title}</h1>
                                    <span className='book-description-author'>{book.author}</span>
                                    <div className='book-description-numbers-div'>
                                        {book.rating > 0 &&
                                            <span className='book-description-numbers'>★ {book.rating?.toFixed(1)}</span>
                                        }
                                        {book.reviews?.length > 0 &&
                                            <a
                                                href='#reviews'
                                                className='book-description-numbers'
                                                style={{ textDecoration: "none" }}>
                                                Отзывы: {book.reviews?.length}
                                            </a>
                                        }
                                    </div>
                                </div>
                                <div className='book-description-buttons'>
                                    {isReader ?
                                        <>
                                            <span className='book-description-status'>{book.status}</span>
                                            <Button title={'В избранное'}
                                                onClick={() => {
                                                    store.addToFavorites(store.user.id, book.id)
                                                    setModalActiveAddToFavoritesStatus(true)
                                                }} />
                                            {addToFavoritesStatus !== 0 &&
                                                <>
                                                    {addToFavoritesStatus === 200 ?
                                                        <Modal active={modalActiveAddToFavoritesStatus} setActive={setModalActiveAddToFavoritesStatus}>
                                                            <h1 className='pin-book-status green'>Книга добавлена в избранное</h1>
                                                        </Modal> :
                                                        <Modal active={modalActiveAddToFavoritesStatus} setActive={setModalActiveAddToFavoritesStatus}>
                                                            <h1 className='pin-book-status red'>Не удалось добавить книгу в избранное</h1>
                                                        </Modal>
                                                    }
                                                </>
                                            }
                                            <Button title={'Забронировать'} />
                                        </>
                                        : <>
                                            <span className='book-description-status'>Количество копий: {book.copies}</span>
                                            <Button title={'Закрепить'}
                                                onClick={() => { setModalActivePinBook(true) }} />
                                            <Modal active={modalActivePinBook} setActive={setModalActivePinBook}>
                                                <h1 className='pin-book-name'>Закрепление книги</h1>
                                                <div className='catalog-filters-item pin-book-readers'>
                                                    <span className='catalog-filters-item-title'>Список читателей</span>
                                                    <Input placeholder='Введите имя читателя'
                                                        onChange={(e) => { setValue(e.target.value) }} />
                                                    <div style={{
                                                        height: hasScroll ? '155px' : 'auto',
                                                        paddingRight: '10px',
                                                        width: '500px'
                                                    }}
                                                        ref={filters} >
                                                        <div className='catalog-filters-item-checkbox-item'>
                                                            {filter.map(el => (
                                                                <label key={el.id} className='catalog-filters-item-checkbox-label'>
                                                                    <input
                                                                        type='checkbox'
                                                                        className='catalog-filters-item-checkbox'
                                                                        onChange={() => handleCheckboxChange(el.id)}
                                                                        checked={selectedItems === el.id}
                                                                    />
                                                                    <span className='catalog-filters-item-checkbox-custom'></span>
                                                                    {el.last_name} {el.first_name}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button
                                                    title={'Закрепить'}
                                                    onClick={() => {
                                                        console.log(selectedItems)
                                                        if (selectedItems !== 0) {
                                                            store.pinBook(book.id, selectedItems)
                                                            setSelectedItems(0)
                                                            setModalActivePinBook(false)
                                                            setModalActivePinBookStatus(true)
                                                        }
                                                    }
                                                    } />
                                            </Modal>
                                            {pinBookStatus !== 0 &&
                                                <>
                                                    {pinBookStatus === 200 ?
                                                        <Modal active={modalActivePinBookStatus} setActive={setModalActivePinBookStatus}>
                                                            <h1 className='pin-book-status green'>Книга закреплена за читателем</h1>
                                                        </Modal> :
                                                        <Modal active={modalActivePinBookStatus} setActive={setModalActivePinBookStatus}>
                                                            <h1 className='pin-book-status red'>Книгу не удалось закрепить за читателем</h1>
                                                        </Modal>
                                                    }
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                            <div className='book-description-desc'>
                                <h1 className='book-section-name'>О книге</h1>
                                <p className='book-description-desc-text' dangerouslySetInnerHTML={{ __html: book.description }}></p>
                            </div>
                            <div className='book-description-genres-tegs'>
                                <div>
                                    <h1 className='book-section-name'>Жанры</h1>
                                    <p>{book.genres?.join(', ')}.</p>
                                </div>
                                <div>
                                    <h1 className='book-section-name'>Теги</h1>
                                    <p>{book.tags?.join(', ')}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='book-description-head'>
                        <h1 style={{ 'marginLeft': '30px', 'marginBottom': '30px' }} >
                            <a className='book-section-name' name='reviews'>
                                Отзывы</a></h1>
                        <Button title={'Написать отзыв'} onClick={() => { setModalActiveReview(true) }} />
                        <Modal active={modalActiveReview} setActive={setModalActiveReview}>
                            <h1 className='pin-book-name'>Отзыв</h1>
                            <div className='modal-review'>
                                <div className='modal-review-star-div'>
                                    <span>Оцените книгу:</span>
                                    <span className='modal-review-stars'>
                                        {stars.map(el => {
                                            if (el < selectedStars) {
                                                return <FaStar key={el} onClick={() => setSelectedStars(el + 1)} className='modal-review-star' />
                                            } else {
                                                return <FaRegStar key={el} onClick={() => setSelectedStars(el + 1)} className='modal-review-star' />
                                            }
                                        })}
                                    </span>
                                </div>
                                <textarea
                                    placeholder='Введите отзыв'
                                    className='textarea textarea-review'
                                    value={text}
                                    onChange={e => setText(e.target.value)} />
                            </div>
                            <Button
                                title={'Отправить'}
                                onClick={() => {
                                    if (text !== '' && selectedStars !== 0) {
                                        store.createReview(selectedStars, 'qwerty', text, store.user.id, book.id)
                                        setModalActiveReview(false)
                                        setModalActiveCreateReviewStatus(true)
                                        setText('')
                                        setSelectedStars(0)
                                    }
                                }
                                } />
                        </Modal>
                        {createReviewStatus !== 0 &&
                            <>
                                {createReviewStatus === 200 ?
                                    <Modal active={modalActiveCreateReviewStatus} setActive={setModalActiveCreateReviewStatus}>
                                        <h1 className='pin-book-status green'>Отзыв отправлен</h1>
                                    </Modal> :
                                    <Modal active={modalActiveCreateReviewStatus} setActive={setModalActiveCreateReviewStatus}>
                                        <h1 className='pin-book-status red'>Не удалось отправить отзыв</h1>
                                    </Modal>
                                }
                            </>
                        }
                    </div>
                    {
                        book.reviews?.length > 0 ?
                            <div className='book-reviews'>
                                {book.reviews?.slice(0, 2).map(el =>
                                    <ReviewItem key={el.id} reviewItem={el} isAccount={false} />
                                )}
                            </div>
                            : <div className='book-reviews'>
                                Нет отзывов
                            </div>
                    }
                    {
                        book.reviews?.length > 2 &&
                        <Link
                            to={'reviews'}
                            className='read-all'>Смотреть все</Link>
                    }
                </div >
            }
        </>
    )
})