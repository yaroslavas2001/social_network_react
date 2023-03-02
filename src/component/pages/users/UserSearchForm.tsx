import React from "react"
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import TextareaAutosizeCustom from "../../../common/TextareaAutosizeCustom/TextareaAutosizeCustom"
import BaseButton from "../../../common/Button/BaseButton";
import style from "./Users.module.css"

const UserSearchForm = (props: any) => {
  const onSubmit = (values: any) => {
    props.setSearchText(values.term);
  }

  return (
    <Formik
      initialValues={{ term: '' }}
      onSubmit={onSubmit}
      data-lpignore="true"
    >
      <Form className={style.form}
      >
        <Field name="term" as={TextareaAutosizeCustom} placeholder="First Name" />
        <BaseButton className={[style.search_form_btn]} value="Find" onClick={() => { }} />
      </Form>
    </Formik>

  )
}
export default UserSearchForm;
