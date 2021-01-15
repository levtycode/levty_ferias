const DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS = 14;
const DIAS_DE_DESCANSO_MINIMO_PERMITIDO = 5;
const SALDO_PARA_VALIDACAO = 17;

const MSG_PERIODO_14_DIAS = "Pelo menos um dos períodos tem que ser maior que 14 dias";
const MSG_PERIODO_INFERIOR_5_DIAS = "Não pode haver período inferior a 5 dias";
const MSG_VALIDATED = "Regras validadas";

function rulesOfDaysScheduleHolidays(_object, prog1RestDays, prog2RestDays, prog3RestDays, vacationBalance, allowanceDays){
    /**
    * Dias de descanso: as férias poderão ser fracionadas em até três períodos, 
    * sendo que um deles não poderá ser inferior a 14 dias corridos e os demais 
    * não poderão ser inferiores a 5 dias corridos, cada um.
    * 
    * Também é considerado férias coletivas, se a ferias coletivas tiver mais que 14 dias atende a regra.
    */ 
   let biggerThan14 = false;

   _object.conPeriodosDescansosItsCollective.forEach(element => {
       
       const restDays = element.quantidadeDiasDescansoRea || element.quantidadeDiasDescansoProg;
       
       if(restDays >= DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) {
           biggerThan14 = true;
       }
   });
   
   /**
    * Se saldo for menor que 17 o colaborador já tem que ter tirado um período de descanso de 14 dias
    * Se o saldo for maior que 17 o colaborador obrigatoriamente tem que tirar um período de 14 dias
    * Sendo as constantes:
    * DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS = 14
    * DIAS_DE_DESCANSO_MINIMO_PERMITIDO = 5
    * SALDO_PARA_VALIDACAO = 17
   */
   
   //Considera o abono
   vacationBalance -= allowanceDays;
   
   if(vacationBalance >= SALDO_PARA_VALIDACAO)
   {
       if((prog1RestDays && prog1RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) &&  
         (prog2RestDays && prog2RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS)  && 
         (prog3RestDays && prog3RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS))
       {
           //_utils.addErrorMessage("Pelo menos um dos períodos tem que ser maior que 14 dias");
           return MSG_PERIODO_14_DIAS;
       }
   }else if(((prog1RestDays && prog1RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) && 
       (prog2RestDays && prog2RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) && 
       (prog3RestDays && prog3RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS)) &&  
       !biggerThan14){
        //_utils.addErrorMessage("Pelo menos um dos períodos tem que ser maior que 14 dias");
        return MSG_PERIODO_14_DIAS;
   }
   
  if((vacationBalance < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) && (prog1RestDays + prog2RestDays) === vacationBalance && !biggerThan14){
       
       if((prog1RestDays && prog1RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) && 
         (prog2RestDays && prog2RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS))
           {
               //_utils.addErrorMessage("Pelo menos um dos períodos tem que ser maior que 14 dias");
               return MSG_PERIODO_14_DIAS;
           }
       
    }else if((prog1RestDays + prog2RestDays) === vacationBalance && !biggerThan14){
       
       if((prog1RestDays && prog1RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS) && 
         (prog2RestDays && prog2RestDays < DIAS_DE_DESCANSO_MINIMO_EM_PELO_MENOS_UM_DOS_PERIODOS))
           {
               //_utils.addErrorMessage("Pelo menos um dos períodos tem que ser maior que 14 dias");
               return MSG_PERIODO_14_DIAS;
           }
       
    }
   
   if((prog1RestDays && prog1RestDays < DIAS_DE_DESCANSO_MINIMO_PERMITIDO) || 
       (prog2RestDays && prog2RestDays < DIAS_DE_DESCANSO_MINIMO_PERMITIDO) || 
       (prog3RestDays && prog3RestDays < DIAS_DE_DESCANSO_MINIMO_PERMITIDO)){
       //_utils.addErrorMessage("Não pode haver período inferior a 5 dias");
       return MSG_PERIODO_INFERIOR_5_DIAS;
   }
   
   return MSG_VALIDATED;
}

module.exports = { 
    rulesOfDaysScheduleHolidays,
    MSG_PERIODO_14_DIAS,
    MSG_PERIODO_INFERIOR_5_DIAS,
    MSG_VALIDATED
};