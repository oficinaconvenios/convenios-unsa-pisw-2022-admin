import {IAdmin, IAdminError} from './../../../shared/interfaces/admin.interface';
import { createAction, props } from '@ngrx/store';
export const AdminActions = {
  ADMIN_GET_SUCCESS_ACTION:"[Service] Admin Get Success",
  ADMIN_GET_ALL_REQUEST_ACTION:"[Component] Admin Get All Request",
  ADMIN_GET_ALL_SUCCESS_ACTION:"[Service] Admin Get All Success",
  ADMIN_GET_ALL_ERROR_ACTION:"[Service] Admin Get All Error",
  ADMIN_UPDATE_REQUEST_ACTION:"[Update - Page] Admin Update Request",
  ADMIN_DATA_SUCCESS_ACTION:"[API - Heroku] Admin Data Success",
  ADMIN_VIEW_STATE_MODAL_ACTION:"[Component] Admin View State Success",
  ADMIN_VIEW_ADMIN_DATA_ACTION:"[Component] Admin View Data Success",
  SAVE_ID_ADMIN_LOGGED_ACTION:"[Component] Save Id Admin Logged",
}

// definición de los actions
export const adminGetSuccessAction = createAction(
  AdminActions.ADMIN_GET_SUCCESS_ACTION,
  props<IAdmin>()
)

export const adminGetAllRequestAction = createAction(
  AdminActions.ADMIN_GET_ALL_REQUEST_ACTION
)
export const adminGetAllSuccessAction = createAction(
  AdminActions.ADMIN_GET_ALL_SUCCESS_ACTION,
  props<{data:IAdmin[]}>()
)
export const adminGetAllErrorAction = createAction(
  AdminActions.ADMIN_GET_ALL_ERROR_ACTION,
  props<IAdminError>()
)

export const adminChangeModalStateAction = createAction(
  AdminActions.ADMIN_VIEW_STATE_MODAL_ACTION,
  props<{stateModal:boolean}>()
)
export const adminChangeDataAdminStateAction = createAction(
  AdminActions.ADMIN_VIEW_ADMIN_DATA_ACTION,
  props<{admin:IAdmin}>()
)
export const setIdAdminStateAction = createAction(
  AdminActions.SAVE_ID_ADMIN_LOGGED_ACTION,
  props<{id:number}>()
)
