import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { loginAdmin } from '../utils/admin/admin.js'
import { createAcc, getAllEmployees, getEmployeeById, getEmployeesByName, loginEmp, deleteEmpAcc, updateEmpAcc, changeEmpPassword } from '../utils/employee/employee.js'
import { AddService, deleteService, getServiceById, getServicesByName, getServicesByType, updateService } from '../utils/service/service.js'
import { getAllDocuments, addDocument } from '../utils/document/document.js'
import { demandAcc, getDemandAccById, getDemandAccs, deleteDemandAcc, requestService, getRequests, getRequestsByService, getRequestById, updateRequest } from '../utils/demand/demand.js'
import { getTypeById, getTypes, updateType } from '../utils/typeOfService/typeOfService.js'
import { addDebtor, getDebtorById, getDebtorsPaid, getDebtorsUnpaid, updateDebtor } from '../utils/debtor/debtor.js'
import { AddGraphService, getGraphServiceByType, getGraphServiceByService, getGraphServiceById, updateGraphService, deleteGraphService} from '../utils/graphs/graphService.js'
import { AddGraphTOS, getGraphTOSByType, getGraphTOSById, updateGraphTOS, deleteGraphTOS } from '../utils/graphs/graphTOS.js'
import { AddGraphAll, getGraphAllById, updateGraphAll, deleteGraphAll, updateGraphAllSpendings } from '../utils/graphs/graphAll.js'
import { getRegDocument } from '../utils/regulations/regulations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    user: null,
    token: null,
    admin: null,
    typeOfService: null,
    types: [],
    service: null,
    services: [],
    employees: [],
    employee: null,
    debtors: [],
    debtor: null,
    demands: [],
    demand: null,
    accDemands: [],
    accDemand: null,
    documents: [],
    value: [],
    duration: null,
    graphService: null,
    graphTOS: null,
    graphAll: null,
    regulations: null
  },
  mutations: {
    setRegulations: (state, payload) => {
      state.regulations = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },
    setToken: (state, payload) => {
      state.token = payload
      //console.log(state.token)
    },
    setAdmin: (state, payload) => {
      state.admin = payload
      //console.log(state.admin)
    },
    setTypeOfService: (state, payload) => {
      state.typeOfService = payload
    },
    setTypes: (state, payload) => {
      state.types = payload
    },
    setService: (state, payload) => {
      state.service = payload
    },
    setServices: (state, payload) => {
      state.services = payload
    },
    setEmployees: (state, payload) => {
      state.employees = payload
    },
    setEmployee: (state, payload) => {
      state.employee = payload
    },
    setDebtors: (state, payload) => {
      state.debtors = payload
    },
    setDebtor: (state, payload) => {
      state.debtor = payload
    },
    setDemands: (state, payload) => {
      state.demands = payload
    },
    setDemand: (state, payload) => {
      state.demand = payload
    },
    setAccDemands: (state, payload) => {
      state.accDemands = payload
    },
    setAccDemand: (state, payload) => {
      state.accDemand = payload
    },
    setDocuments: (state, payload) => {
      state.documents = payload
    },
    setValue: (state, payload) => {
      state.value = payload
    },
    setDuration: (state, payload) => {
      state.duration = payload
    },
    setGraphService: (state, payload) => {
      state.graphService = payload
    },
    setGraphTOS: (state, payload) => {
      state.graphTOS = payload
    },
    setGraphAll: (state, payload) => {
      state.graphAll = payload
    }
  },
  actions: {
    addGraphService: ({commit}, payload) => {
      AddGraphService(payload.data, payload.token)
    },
    getGraphServiceByType: ({commit}, payload) => {
      getGraphServiceByType(payload.typeOfService, payload.token)
      /*.then((res) => {
        commit('setGraphService', res.data)
      })
      .catch(e => console.log(e))*/
    },
    getGraphServiceByService: ({commit}, payload) => {
      getGraphServiceByService(payload.service, payload.token)
      /*.then((res) => {
        commit('setGraphService', res.data)
      })
      .catch(e => console.log(e))*/
    },
    getGraphServiceById: ({commit}, payload) => {
      getGraphServiceById(payload.id, payload.token)
      /*.then(res => {
        commit('setGraphService', res.data)
      })
      .catch(e => console.log(e))*/
    },
    deleteGraphService: ({commit}, payload) => {
      deleteGraphService(payload.id, payload.token)
        /*.then(res => console.log(res))
        .catch(e => console.log(e))*/
    },
    updateGraphService: ({commit}, payload) => {
      updateGraphService(payload.id, payload.budget, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    addGraphTOS: ({commit}, payload) => {
      AddGraphTOS(payload.data, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    getGraphTOSByType: ({commit}, payload) => {
      getGraphTOSByType(payload.typeOfService, payload.token)
      /*.then((res) => {
        commit('setGraphTOS', res.data)
      })
      .catch(e => console.log(e))*/
    },
    getGraphTOSById: ({commit}, payload) => {
      getGraphTOSById(payload.id, payload.token)
      /*.then(res => {
        commit('setGraphTOS', res.data)
      })
      .catch(e => console.log(e))*/
    },
    deleteGraphTOS: ({commit}, payload) => {
      deleteGraphTOS(payload.id, payload.token)
        /*.then(res => console.log(res))
        .catch(e => console.log(e))*/
    },
    updateGraphTOS: ({commit}, payload) => {
      updateGraphTOS(payload.id, payload.budget, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    addGraphAll: ({commit}, payload) => {
      AddGraphAll(payload.data, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    getGraphAllById: ({commit}, payload) => {
      getGraphAllById(payload.token)
      /*.then(res => {
        commit('setGraphAll', res.data)
      })
      .catch(e => console.log(e))*/
    },
    deleteGraphAll: ({commit}, payload) => {
      deleteGraphAll(payload.id, payload.token)
        /*.then(res => console.log(res))
        .catch(e => console.log(e))*/
    },
    updateGraphAll: ({commit}, payload) => {
      updateGraphAll(payload.id, payload.budget, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    updateGraphAllSpendings: ({commit}, payload) => {
      updateGraphAllSpendings(payload.id, payload.amount, payload.token)
        /*.then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))*/
    },
    getSerDocs: ({commit}, payload) => {
      let value = []
        payload.service.documents.forEach((val) => { 
          let ob = {
            name: val
          }
          value.push(ob)
        })
        commit('setValue', value)
    },
    getTypeDebt: ({commit, dispatch, state}) => {
      state.types.forEach((val) => {
          if (val.name === 'Debt' ) {
            commit('setTypeOfService', val)
          }
      })
      dispatch("getServicesByType", {
        typeOfService: state.typeOfService._id,
        token: state.token
      })
    },
    getDebt: ({commit}, payload) => {
      commit('setService', payload.service)
    },
    getAllEmployees: ({commit}, payload) => {
      getAllEmployees(payload.token)
        .then(res => {
          //console.log(res.data)
          commit('setEmployees', res.data)
        })
        .catch(e => console.log(e))
    },
    getEmployeeById: ({commit}, payload) => {
      getEmployeeById(payload.id, payload.token)
        .then(res => {
          //console.log(res.data)
          commit('setEmployee', res.data)
        })
        .catch(e => console.log(e))
    },
    getEmployeesByName: ({commit}, payload) => {
      getEmployeesByName(payload.lastname, payload.token)
        .then(res => {
          //console.log(res.data)
          commit('setEmployees', res.data)
        })
        .catch(e => console.log(e))
    },
    getTypes: ({commit}, payload) => {
      getTypes(payload.token)
        .then(res => {
          //console.log(res)
          commit('setTypes', res.data)
        })
        .catch(e => console.log(e))
    },
    updateType: ({commit}, payload) => {
      updateType(payload.id, payload.updates, payload.token)
    },
    getTypeById: ({commit}, payload) => {
      getTypeById(payload.id, payload.token)
        .then(res => {
          //console.log(res)
          commit('setTypeOfService', res.data)
        })
        .catch(e => console.log(e))
    },
    addService: ({commit, dispatch, state}, payload) => {
      AddService(payload.data, payload.token)
        .then(res => {
          console.log(res.data)
          const upTypeBud = res.data.budget
          let data = {
            typeOfService: res.data.typeOfService,
            service: res.data._id,
            budgetValues: [{
              value: res.data.budget,
              date: new Date()
            }]
          }
          //console.log(data)
          dispatch("addGraphService", {
            data,
            token: state.token
          }).then(() => {
            const updates = {
              budget: upTypeBud
            }
            //console.log(state.typeOfService._id)
            //console.log(updates)
            updateType(state.typeOfService._id, updates, state.token)
              .then((res) => {
              console.log(res)
              const TypeBudget = res.data.budget
              getGraphTOSByType(state.typeOfService._id, state.token)
                .then(res => {
                commit('setGraphTOS', res.data)
                const budget = {
                  value: TypeBudget,
                  date: new Date()
                }
                updateGraphTOS(res.data._id, budget, state.token)
                  .then(() => {
                  getGraphAllById(state.token)
                    .then(res => {
                      console.log(res)
                    commit('setGraphAll', res.data)
                    const budget = {
                      value: res.data.budgetValues[res.data.budgetValues.length - 1].value + data.budgetValues[data.budgetValues.length - 1].value,
                      date: new Date()
                    }
                    updateGraphAll(res.data._id, budget, state.token)
                      .then(res => commit("setGraphAll", res.data))
                      .catch(e => console.log(e))
                  }).catch(e => console.log(e))
                }).catch(e => console.log(e))
              }).catch(e => console.log(e))
            }).catch(e => console.log(e))
          }).catch(e => console.log(e))
          //console.log(state.typeOfService._id)
          //console.log(updates)
        }).catch(e => console.log(e))
    },
    getServicesByType: ({commit}, payload) => {
      getServicesByType(payload.typeOfService, payload.token)
      .then((res) => {
        commit('setServices', res.data)
      })
      .catch(e => console.log(e))
    },
    getServiceById: ({commit}, payload) => {
      getServiceById(payload.id, payload.token)
      .then(res => {
        console.log(res)
        commit('setService', res.data)
        let value = []
        res.data.documents.forEach((val) => { 
          let ob = {
            name: val
          }
          value.push(ob)
        })
        commit('setValue', value)
        if (res.data.duration.endOffer) {
          const date1 = new Date(res.data.duration.endOffer);
          const date2 = new Date();
          const diffTime = date1 - date2
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          commit('setDuration', diffDays)
        }
      })
      .catch(e => console.log(e))
    },
    getServicesByName: ({commit}, payload) => {
      getServicesByName(payload.type, payload.name, payload.token)
      .then(res => {
        console.log(res)
        commit('setServices', res.data)
      })
      .catch(e => console.log(e))
    },
    deleteService: ({commit, dispatch, state}, payload) => {
      deleteService(payload.id, payload.token)
        .then(res => {
          getGraphServiceByService(res.data._id, state.token)
            .then(res => {
              deleteGraphService(res.data._id, state.token)
          }).catch(e => console.log(e))
        const updates = {
          budget: -(res.data.budget)
        }
        updateType(state.typeOfService._id, updates, state.token)
              .then((res) => {
              console.log(res)
              const TypeBudget = res.data.budget
              getGraphTOSByType(state.typeOfService._id, state.token)
                .then(res => {
                commit('setGraphTOS', res.data)
                const budget = {
                  value: TypeBudget,
                  date: new Date()
                }
                updateGraphTOS(res.data._id, budget, state.token)
                  .then(() => {
                  getGraphAllById(state.token)
                    .then(res => {
                      console.log(res)
                    commit('setGraphAll', res.data)
                    const budget = {
                      value: res.data.budgetValues[res.data.budgetValues.length - 1].value + updates.budget,
                      date: new Date()
                    }
                    updateGraphAll(res.data._id, budget, state.token)
                      .then(res => commit("setGraphAll", res.data))
                      .catch(e => console.log(e))
                  }).catch(e => console.log(e))
                }).catch(e => console.log(e))
              }).catch(e => console.log(e))
            }).catch(e => console.log(e))
        }).catch(e => console.log(e))
          //console.log(state.typeOfService._id)
          //console.log(updates)
    },
    updateService: ({commit, state}, payload) => {
      updateService(payload.id, payload.updates, payload.token)
        .then(res => {
          const servBud = res.data.budget
          getGraphServiceByService(res.data._id, state.token)
            .then(res => {
              console.log(res)
              console.log(servBud)
              console.log(res.data.budgetValues[res.data.budgetValues.length - 1].value)
              const diff = servBud - res.data.budgetValues[res.data.budgetValues.length - 1].value
              console.log(diff)
              const budget = {
                value: servBud,
                date: new Date()
              }
              updateGraphService(res.data._id, budget, state.token)
                .then(res => {
                  commit('setGraphService', res.data)
                  const updates = {
                    budget: diff,
                  }      
            updateType(state.typeOfService._id, updates, state.token)
              .then((res) => {
              console.log(res)
              const TypeBudget = res.data.budget
              getGraphTOSByType(state.typeOfService._id, state.token)
                .then(res => {
                commit('setGraphTOS', res.data)
                const budget = {
                  value: TypeBudget,
                  date: new Date()
                }
                updateGraphTOS(res.data._id, budget, state.token)
                  .then(() => {
                  getGraphAllById(state.token)
                    .then(res => {
                      console.log(res)
                    commit('setGraphAll', res.data)
                    const budget = {
                      value: res.data.budgetValues[res.data.budgetValues.length - 1].value + diff,
                      date: new Date()
                    }
                    updateGraphAll(res.data._id, budget, state.token)
                      .then(res => commit("setGraphAll", res.data))
                      .catch(e => console.log(e))
                  }).catch(e => console.log(e))
                }).catch(e => console.log(e))
              }).catch(e => console.log(e))
            }).catch(e => console.log(e))
                }).catch(e => console.log(e))
            }).catch(e => console.log(e))
          //console.log(state.typeOfService._id)
          //console.log(updates)
        }).catch(e => console.log(e))
    },
    requestService: ({commit}, payload) => {
      requestService(payload.data, payload.token)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    getRequests: ({commit}, payload) => {
      getRequests(payload.state, payload.token)
        .then(res => {
          console.log(res)
          commit('setDemands', res.data)
        })
        .catch(e => console.log(e))
    },
    getRequestsByService: ({commit}, payload) => {
      getRequestsByService(payload.service, payload.token)
      .then((res) => {
        commit('setDemands', res.data)
      })
      .catch(e => console.log(e))
    },
    getRequestById: ({commit}, payload) => {
      getRequestById(payload.id, payload.token)
      .then(res => {
        //console.log(res)
        commit('setDemand', res.data)
      })
      .catch(e => console.log(e))
    },
    updateRequest: ({commit}, payload) => {
      updateRequest(payload.id, payload.state, payload.token)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    addDebtor: ({commit}, payload) => {
      addDebtor(payload.data, payload.token)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    getDebtorsPaid: ({commit}, payload) => {
      getDebtorsPaid(payload.token)
        .then(res => {
          console.log(res)
          commit('setDebtors', res.data)
        })
        .catch(e => console.log(e))
    },
    getDebtorsUnpaid: ({commit}, payload) => {
      getDebtorsUnpaid(payload.token)
        .then(res => {
          console.log(res)
          commit('setDebtors', res.data)
        })
        .catch(e => console.log(e))
    },
    getDebtorById: ({commit}, payload) => {
      getDebtorById(payload.id, payload.token)
      .then(res => {
        console.log(res)
        commit('setDebtor', res.data)
      })
      .catch(e => console.log(e))
    },
    updateDebtor: ({commit}, payload) => {
      updateDebtor(payload.id, payload.remain, payload.token)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    addDocument: ({commit}, payload) => {
      addDocument(payload.data, payload.token)
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))

    },
    getAllDocuments: ({commit}, payload) => {
      getAllDocuments(payload.token)
      .then(res => {
        //console.log(res)
        commit('setDocuments', res.data)
      })
      .catch(e => console.log(e))
    },
    demandAcc: ({commit}, payload) => {
      demandAcc(payload.data)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    },
    getDemandAccs: ({commit}, payload) => {
      getDemandAccs(payload.token)
        .then(res => {
          commit('setAccDemands', res.data)
        })
        .catch(e => console.log(e))
    },
    getDemandAccById: ({commit}, payload) => {
      getDemandAccById(payload.id, payload.token)
        .then(res => {
          commit('setAccDemand', res.data)
        })
        .catch(e => console.log(e))
    },
    deleteDemandAcc: ({commit}, payload) => {
      deleteDemandAcc(payload.id, payload.token)
      .then(res =>  console.log(res.data))
      .catch(e => console.log(e))
    },
    loginAdmin: ({commit}, payload) => {
      loginAdmin(payload.username, payload.password)
        .then(res => {
          commit('setUser', null)
          commit('setAdmin', res.data.dashboard)
          //localStorage.setItem('token', res.data.token)
          commit('setToken', res.data.token)
        })
        .catch(e => console.log(e))
    },
    createEmpAcc: ({commit}, payload) => {
      createAcc(payload.data, payload.token)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    },
    deleteEmpAcc: ({commit}, payload) => {
      deleteEmpAcc(payload.id, payload.token)
      .then(res => console.log(res))
      .catch(e => console.log(e))
    },
    updateEmpAcc: ({commit}, payload) => {
      updateEmpAcc(payload.id, payload.updates, payload.token)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    loginEmp: ({commit}, payload) => {
      loginEmp(payload.email, payload.password)
        .then(res => {
          console.log(res)
          commit('setAdmin', null)
          commit('setUser', res.data.employee)
          commit('setToken', res.data.token)
        })
        .catch(e => console.log(e))
    },
    changeEmpPassword: ({commit}, payload) => {
      changeEmpPassword(payload.id, payload.updates, payload.token)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    },
    getRegDocument: ({commit}, payload) => {
      getRegDocument(payload.token)
      .then(res => commit('setRegulations', res.data))
      .catch(e => console.log(e))
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    admin: state => state.admin,
    services: state => state.services,
    service: state => state.service,
    typeOfService: state => state.typeOfService,
    types: state => state.types,
    employees: state => state.employees,
    employee: state => state.employee,
    debtors: state => state.debtors,
    debtor: state => state.debtor,
    demands: state => state.demands,
    demand: state => state.demand,
    accDemands: state => state.accDemands,
    accDemand: state => state.accDemand,
    documents: state => state.documents,
    value: state => state.value,
    duration: state => state.duration,
    graphService: state => state.graphService,
    graphTOS: state => state.graphTOS,
    graphAll: state => state.graphAll,
    regulations: state => state.regulations,
  }
})