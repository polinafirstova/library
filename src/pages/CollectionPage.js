import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import UserService from '../service/UserService'
import Path from '../components/Path'
import { useState } from 'react'
import BookItem from '../components/BookItem'

export default function CollectionPage() {
    // const { id } = useParams()
    // const [collection, setCollection] = useState(null)

    // useEffect(() => {
    //     async function getCollection() {
    //         try {
    //             const response = await UserService.getCollectionsItem(id)
    //             console.log(response)
    //             setCollection(response.data)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     if (!collection) {
    //         getCollection()
    //     }
    // }, [id, collection])

    const collection = {
        id: 1,
        title: 'Название',
        description: 'Lorem <br>ipsum</br> <b>dolor</b> sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur. Tincidunt ultricies curabitur morbi arcu augue cursus dolor risus. Volutpat eu mauris lorem ac commodo scelerisque enim sociis. Ultricies sed lacus neque morbi et nisl. Nascetur erat facilisis nulla nisi augue suspendisse ut quisque ut. Lorem ipsum dolor sit amet consectetur.',
        books: ['', '', '', '']
    }

    return (
        <>
            {collection !== null &&
                <div>
                    <Path current={collection.title} />
                    <h1 className='collection-name'>{collection.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: collection.description }} className='collection-description'></p>
                    <div className='book-list'>
                        {collection.books.map(el => (
                            <Link to={`${el.id}`} className='book-link-another-page' key={el.id}>
                                <BookItem key={el.id} bookItem={el} />
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}
