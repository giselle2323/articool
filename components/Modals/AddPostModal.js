import React from "react";
import { Modal } from "react-responsive-modal";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default withPageAuthRequired(function AddPost({
  open,
  onCloseModal,
  author,
  submitPost,
}) {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{
        modal:
          "custom-modal dark:bg-dark-700 bg-white text-dark-700 md:px-12 dark:text-white",
      }}
    >
      <div className="flex items-center w-full bg-gray-5">
        <div className=" my-10 mx-auto rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-2xl font-semibold ">Post An Idea</h1>
          </div>
          <div>
            <Formik
              initialValues={{
                title: "",
                body: "",
                tag: "",
                links: "",
                authorId: author[0].id,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.title) {
                  errors.title = "Required";
                } else if (!values.body) {
                  errors.body = "Required";
                } else if (!values.tag) {
                  errors.tag = "Required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                await submitPost(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="px-5">
                  <div className="mb-6">
                    <label
                      htmlFor="title"
                      className="block mb-3 text-sm text-lg font-medium"
                    >
                      Title
                    </label>
                    <Field
                      id="title"
                      name="title"
                      placeholder="Supabase Tutorial"
                      className="w-full px-3 mb-3 py-4 bg-transparent placeholder-gray-500 border text-lg font-normal border-gray-800 rounded-md"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="body"
                      className="block mb-3 text-sm text-lg font-medium"
                    >
                      Description
                    </label>

                    <Field
                      as="textarea"
                      id="body"
                      name="body"
                      placeholder="A post that tell if if a ball is red or yellow"
                      className="w-full mb-3 px-3 py-4 h-48 bg-transparent placeholder-gray-500 border border-gray-800 rounded-md overscroll-y-auto"
                    />
                    <ErrorMessage
                      name="body"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="tag"
                      className="block mb-3 text-sm text-lg font-medium"
                    >
                      Tag
                    </label>

                    <Field
                      id="tag"
                      name="tag"
                      as="select"
                      className="py-4 mb-3 px-2 bg-transparent border border-gray-800 w-full max-w-xs rounded-md"
                    >
                      <option>Choose article tag</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="serverless">Serverless</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="tag"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="links"
                      className="block mb-3 text-sm text-lg font-medium"
                    >
                      Links (optional)
                    </label>
                    <Field
                      id="links"
                      name="links"
                      placeholder="https://dribbble.com"
                      className="w-full px-3 mb-3 text-dark-700 py-2 bg-transparent placeholder-gray-500 border border-gray-800 rounded-md"
                    />
                  </div>
                  <div className="mb-6">
                    <Field type="hidden" id="authorId" name="authorId" />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-3 py-4 text-white bg-green-transparent rounded-md focus:bg-green-700 focus:outline-none"
                    >
                      {isSubmitting ? "Submitting Post" : "Submit Post"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
});
