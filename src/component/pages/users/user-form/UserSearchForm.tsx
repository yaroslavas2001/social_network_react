import React, { FC, memo, useState } from "react"
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import TextareaAutosizeCustom from "../../../../common/TextareaAutosizeCustom/TextareaAutosizeCustom"
import BaseButton from "../../../../common/Button/BaseButton";
import style from "./UserSearchForm.module.css"
import { join } from "../../../../utils/function";
type propsUserSearch = {
  search: string
  isDarkTheme: boolean
  setSearchText: (text: string) => void
}
const UserSearchForm: FC<propsUserSearch> = ({ search, isDarkTheme, setSearchText }) => {

  const onSubmit = (values: any) => {
    setSearchText(values.term);
  }
  return (
    <Formik
      initialValues={{ term: search }}
      onSubmit={onSubmit}
      data-lpignore="true"
    >
      <Form className={join([style.form, isDarkTheme ? style.dark : ''])}
      >
        <Field name="term" as={TextareaAutosizeCustom} placeholder="First Name" />
        <BaseButton type={"submite"} className={[style.search_form_btn]} value="Find" onClick={() => { }} />
      </Form>
    </Formik>

  )
}
export default memo(UserSearchForm);
