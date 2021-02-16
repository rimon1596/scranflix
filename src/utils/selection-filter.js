import React from 'react';

export default function selectionFilter({ series, films }) {
    return {
        series: [
            {
                title: 'Documentaries',
                data: series.filter((item) => item.genre === 'documentaries'),
            },
            {
                title: 'Crime',
                data: series.filter((item) => item.genre === 'crime'),
            },
            {
                title: 'Comedies',
                data: series.filter((item) => item.genre === 'comedies'),
            },
            {
                title: 'Children',
                data: series.filter((item) => item.genre === 'children'),
            },
        ],
        films: [
            {
                title: 'Thriller',
                data: films.filter((item) => item.genre === 'thriller'),
            },
            {
                title: 'Romance',
                data: films.filter((item) => item.genre === 'romance'),
            },
            {
                title: 'Drama',
                data: films.filter((item) => item.genre === 'drama'),
            },
            {
                title: 'Children',
                data: films.filter((item) => item.genre === 'children'),
            },
            {
                title: 'Suspense',
                data: films.filter((item) => item.genre === 'suspense'),
            },
        ],
    };
}