
# Power analysis to determine sample size
rm(list=ls())
# Previous data from Linear+ and Linear++
lp = c(-0.4914,0.5220,2.2695,-0.0990,-0.9135,1.3155,-2.2125,-0.6840,-0.2790,-0.0769,-0.0645,-0.2925,0.9900,1.1212,1.0800,0.3540,1.9231,-0.3105,-0.1710,-0.7245,-0.7365,2.2995,1.4160,0.7785,-0.0495,0.7952,2.2440,-0.6420,-0.3000,0.3360,-0.2385,1.5090,0.3660,0.6750,-0.0555,-0.3885)
lpp = c(1.7835,3.6120,1.0035,0.4365,0.0435,-0.1725,2.1435,3.2325,3.3372,4.1431,-0.9717,0.1080,3.3780,3.4890,-0.2856,4.0185,0.0120,5.0681,-0.0258,2.6178,-0.2347,1.9037,2.4900,3.2655,0.7993,3.6225,0.9346,1.4770,3.9244,1.7406,3.4755,3.9482,4.3275,4.6170,2.4615,0.8370,-0.1680)
meanlp = mean(lp)
sdlp = sd(lp)
meanlpp = mean(lpp)
sdlpp = sd(lpp)
lpp_actual_diff = 9*.981-5*.981
lp_actual_diff = 7*.981-5*.981
lp_sce = 100*(1-meanlp/lp_actual_diff)
lpp_sce = 100*(1-meanlpp/lpp_actual_diff)

library(bayesplay)
library(extraDistr)
# Find appropriate sigmas for the alternative hypotheses
sigmas = seq(1,50,by=0.01)
unlikelies = qhnorm(.99,sigma=sigmas)
# 99% of probability mass between Linear++ mean and 100%
gtSig = sigmas[which.min(abs(unlikelies-(100-lpp_sce)))]
# 99% of probability mass between Linear+ mean and 0%
ltSig = sigmas[which.min(abs(unlikelies-lp_sce))]

n = 21
nSim = 10000
threshold = 3
bf = numeric(nSim)
library(progress)
pb = progress_bar$new(total=nSim)
for (i in 1:nSim){
  pb$tick()
  # Generate random data according to sampled scenario
  
  # STRENGTHEN
  x = rnorm(n, mean = meanlpp, sd = sdlpp)
  y = rnorm(n, mean = meanlpp, sd = sdlpp) # H0: no difference
  y = rnorm(n, mean = meanlp, sd = sdlp) # H1: strengthened
  h1_sig = gtSig
  h1_range = c(0,Inf)
  
  # # WEAKEN
  # x = rnorm(n, mean = meanlp, sd = sdlp)
  # y = rnorm(n, mean = meanlp, sd = sdlp) # H0: no difference
  # y = rnorm(n, mean = meanlpp, sd = sdlp) # H1: weakened
  # h1_sig = ltSig
  # h1_range = c(-Inf,0)
  
  # Stats
  diff = mean(x)-mean(y)
  varx = var(x)
  vary = var(y)
  # SE of difference (unequal means)
  se_diff_unequal = sqrt(varx / (n - 1) + vary / (n - 1))
  # Satterthwaite DOF estimation
  sem1 = varx / (n - 1)
  sem2 = vary / (n - 1)
  semsum = sem1 + sem2
  z1 = (sem1 / semsum)^2 / (n - 1)
  z2 = (sem2 / semsum)^2 / (n - 1)
  df = 1.0 / (z1 + z2)
  data_mod = likelihood(family = "student_t", mean = diff, sd = se_diff_unequal, df =df)
  h0_mod = prior(family = "point", point = 0)
  h1_mod = prior(family = "normal", mean = 0, sd = h1_sig, range = h1_range)
  m1 = integral(data_mod * h1_mod)
  m0 = integral(data_mod * h0_mod)
  bf[i] = m1 / m0
}
supportH0 <- sum(bf<(1/threshold))/nSim
supportH1 <- sum(bf>threshold)/nSim
cat("The probability of observing support for the null hypothesis is ",supportH0)
cat("The probability of observing support for the alternative hypothesis is ",supportH1)




# CFW22 analysis

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
