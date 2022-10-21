rm(list=ls())

library(bayesplay)
library(extraDistr)

# Find appropriate sigmas for the alternative hypotheses
sigmas = seq(1,50,by=0.01)
unlikelies = qhnorm(.99,sigma=sigmas)

# 99% of probability mass between Distinct Colors mean and 100%
gtSig = sigmas[which.min(abs(unlikelies-(100-59.545469)))]

# 99% of probability mass between Same Color mean and 0%
ltSig = sigmas[which.min(abs(unlikelies-89.068816))]

# To test for an increase in Nonlinear and Concurrent
gtSig2 = sigmas[which.min(abs(unlikelies-(100-89.068816)))]

# For combined-Nonlinear H1, we take the mean variance of the separate H1s
gtSigNL = sqrt((gtSig^2+gtSig2^2)/2)

# Copied from Python notebook
condition_info = list(
  c('Nonlinear', 'Same Color', 9.893680, 8.170131, 37.045113),
  c('Concurrent', 'Same Color', 5.548569, 8.967375, 34.801194),
  c('Nonlinear', 'Same Color+', 9.893680, 8.170131, 37.045113),
  c('Concurrent', 'Same Color+', 5.548569, 8.967375, 34.801194),
  c('Similar Colors', 'Same Color', -1.340966, 7.592791, 37.970154),
  c('Frequent Outlier', 'Same Color', -10.794935, 10.496246, 29.157903),
  c('Distinct Colors', 'Same Color', -29.523347, 10.328037, 31.012086),
  c('Small Family', 'Same Color', -45.415213, 10.453145, 29.258044),
  c('Similar Colors', 'Distinct Colors', 28.182381, 10.405992, 31.537478),
  c('Added Noise', 'Distinct Colors', 27.998227, 11.179091, 35.616324),
  c('One-by-One', 'Distinct Colors', 15.460844, 12.248052, 37.910529),
  c('Nonlinear+', 'Distinct Colors', 12.001036, 12.194556, 37.873469),
  c('Time Pressure', 'Distinct Colors', 8.828573, 12.363513, 37.967878),
  c('Concurrent+', 'Distinct Colors', 7.596570, 12.989191, 37.826803)
)

for (info in condition_info){
  name = info[1]
  ref = info[2]
  if (ref=='Same Color'){
    h1_sig = ltSig
    h1_range = c(-Inf,0)
  }else if(ref=='Same Color+'){
    h1_sig = gtSig2
    h1_range = c(0,Inf)
  }else{
    h1_sig = gtSig
    h1_range = c(0,Inf)
  }
  mean = as.numeric(info[3])
  sd = as.numeric(info[4])
  df = as.numeric(info[5])
  data_mod = likelihood(family = "student_t", mean = mean, sd = sd, df =df)
  h0_mod = prior(family = "point", point = 0)
  h1_mod = prior(family = "normal", mean = 0, sd = h1_sig, range = h1_range)
  m1 = integral(data_mod * h1_mod)
  m0 = integral(data_mod * h0_mod)
  bf = m1 / m0
  cat(c('\ndfstats.loc[(dfstats["reference"]=="',ref,'") & (dfstats["condition"]=="',name,'"), "bf"] = ',bf),sep='')
}

### REF-CENTERED & COMBINED NONLINEAR GROUPS
mean = 10.947358
sd = 7.246508
df = 77.991591
data_mod = likelihood(family = "student_t", mean = mean, sd = sd, df =df)
h0_mod = prior(family = "point", point = 0)
h1_mod = prior(family = "normal", mean = 0, sd = gtSigNL, range = c(0,Inf))
m1 = integral(data_mod * h1_mod)
m0 = integral(data_mod * h0_mod)
bf = m1 / m0
cat(c('Nonlinears combined : BF = ',bf))
