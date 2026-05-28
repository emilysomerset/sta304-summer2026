library(survey)

data <- data.frame(
  block_id = rep(1:4, each = 5),
  income   = c(55,60,48,72,65,
               80,90,75,85,70,
               40,35,50,45,38,
               95,100,88,92,85),
  N_psu = 8)

data %>% 
  group_by(block_id) %>% 
  summarise(ti = sum(income))

design <- svydesign(
  id = ~block_id,
  fpc = ~N_psu, 
  data = data
)

svymean(~income,design)
svytotal(~income,design)

data <- data.frame(
  block_id = c(1,1,1,1,1, 2,2,2,2, 3,3,3,3,3, 4,4,4,4),
  income   = c(55,60,48,72,65, 80,90,75,85,
               40,35,50,45,38, 95,100,88,92),
  N_psu = 8)

design <- svydesign(
  id = ~block_id, 
  fpc = ~N_psu, 
  data = data
)

svytotal(~income, design)
confint(svytotal(~income, design), df=3)

svymean(~income, design)
confint(svymean(~income, design), df=3)

#### Two Stage 

data <- data.frame(
       block_id = rep(1:4, each = 5),
       hh_id    = rep(1:5, times = 4),
       income   = c(55,60,48,72,65,
                     80,90,75,85,70,
                    40,35,50,45,38,
                    95,100,88,92,85),
       N_psu = 8,   # stage-1 FPC: N total blocks in population
       M_i   = 10   # stage-2 FPC: known total HH per block
 )

design <- svydesign(
  id = ~block_id + hh_id, 
  fpc = ~N_psu + M_i, 
  data = data
)

svymean(~income, design)
svytotal(~income, design)


data <- data.frame(
  block_id = rep(1:4, each = 5),
  hh_id    = rep(1:5, times = 4),
  income   = c(55,60,48,72,65,
               80,90,75,85,70,
               40,35,50,45,38,
               95,100,88,92,85),
  N_psu = 8, 
  M_i      = rep(c(10, 8, 11, 10), each = 5)
)

design <- svydesign(
  id = ~block_id + hh_id, 
  fpc = ~N_psu + M_i, 
  data = data
)

svymean(~income, design)
svytotal(~income, design)

tt <- data %>% 
  group_by(block_id,N_psu, M_i) %>% 
  summarise(income_m = mean(income))

t_hat <- mean(tt$income_m*tt$M_i)*8
M_0hat <- mean(tt$M_i)*8



