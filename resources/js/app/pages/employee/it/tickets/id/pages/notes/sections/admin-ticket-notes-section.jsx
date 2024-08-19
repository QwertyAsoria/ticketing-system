import {
    add_notes_thunk,
    get_notes_by_id_thunk,
} from "@/app/pages/admin/tickets/redux/tickets-thunk";
import store from "@/app/store/store";
import { Button } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AdminTicketNotesSection() {
    const { notes, path } = useSelector((state) => state.tickets);
    const { user } = useSelector((state) => state.app);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (user) {
            setData({
                ...user,
                user_id: user.id,
                ticket_id: window.location.pathname.split("/")[4],
            });
        }
    }, [user]);

    useEffect(() => {
        store.dispatch(
            get_notes_by_id_thunk(window.location.pathname.split("/")[4])
        );
    }, [path]);

    async function submit_notes(params) {
        setLoading(true);
        try {
            await store.dispatch(add_notes_thunk(data));
            await store.dispatch(
                get_notes_by_id_thunk(window.location.pathname.split("/")[4])
            );
            setData({})
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <section class="bg-white antialiased">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-lg lg:text-2xl font-bold text-gray-900">
                        Notes ({notes.length})
                    </h2>
                </div>
                <form class="mb-6" onSubmit={submit_notes}>
                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                        <label for="comment" class="sr-only">
                            Your comment
                        </label>
                        <textarea
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    notes: e.target.value,
                                })
                            }
                            id="notes"
                            value={data?.notes??''}
                            rows="6"
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
                            placeholder="Write a comment..."
                            required
                        ></textarea>
                    </div>
                    {/* <button
                            type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-indigo-600 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
                        >
                            Post comment
                        </button> */}
                    <Button
                        onClick={submit_notes}
                        loading={loading}
                        type="primary"
                    >
                        Post comment
                    </Button>
                </form>
                {notes &&
                    notes.map((res) => {
                        return (
                            <article class="p-6 text-base bg-white rounded-lg ">
                                <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold capitalize">
                                            <img
                                                class="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael Gough"
                                            />
                                            {res.user.name}
                                        </p>
                                        <p class="text-sm text-gray-600">
                                            <time
                                                pubdate
                                                datetime="2022-02-08"
                                                title="February 8th, 2022"
                                            >
                                                {moment(res.created_at).format(
                                                    "LLL"
                                                )}
                                            </time>
                                        </p>
                                    </div>
                                    <div
                                        id="dropdownComment1"
                                        class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
                                    >
                                        <ul
                                            class="py-1 text-sm text-gray-700"
                                            aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100"
                                                >
                                                    Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100"
                                                >
                                                    Remove
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100"
                                                >
                                                    Report
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p class="text-gray-500">{res.notes}</p>
                            </article>
                        );
                    })}
            </div>
        </section>
    );
}
