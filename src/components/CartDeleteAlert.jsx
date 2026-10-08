"use client";

import { AlertDialog, Button } from "@heroui/react";


export function CartDeleteAlert({ data }) {
    console.log(data)
    const {_id, productName } = data;

    

    const cartProductHandleDelete = async () => {
        const res = await fetch(`http://localhost:8000/cart/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });

        const data = await res.json();
        window.location.reload();


    };

    return (
        <AlertDialog>
            <Button
                size="sm"
                variant="flat"
                className="rounded-lg bg-red-50 px-3 text-xs font-medium text-red-600 hover:bg-red-100 sm:text-sm"
            >
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading>
                                প্রোডাক্টটি কী স্থায়ীভাবে মুছে ফেলতে চান?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                <strong>{productName}</strong> এর সমস্ত ডাটা স্থায়ীভাবে
                                মুছে ফেলতে confirm বাটনে ক্লিক করুন।
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button
                                onClick={cartProductHandleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Confirm
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}