"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ product }) {
  const { _id, productName } = product;
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/product/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/products");
      
    } else {
      console.log(data);
    }
  };

  return (
    <AlertDialog>
      <Button
        size="sm"
        className="h-9 flex-1 border border-red-300 bg-white px-3 text-red-500 sm:flex-none cursor-pointer"
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
                onClick={handleDelete}
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