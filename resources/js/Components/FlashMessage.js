import React from 'react';
import { usePage } from '@inertiajs/inertia-react'

export default function FlashMessage(props) {
    const { flash } = usePage().props


    return (

            <>
                {flash.error && (
                    <div class="alert">{flash.error}</div>
                )}
                {flash.message && (
                    <div class="alert">{flash.message}</div>
                )}
                {flash.success && (
                    <div class="alert">{flash.success}</div>
                )}
            </>

    )
}
