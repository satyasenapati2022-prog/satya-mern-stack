





role of llm in promot engineering:-
- promot engineering:- how you talk
- llm:-who you're talking to 





llm's helps us to:-

1.read our promot
2.interpret our internet
3.generate a good response based on our  promot.

module 1:-introduction to llm & promoting basics

descrimintative Ai:-

descrimintative Ai is a Ai techinique that helps us to classify the data.
-ex:-
1.email -spam & non spam
2.face ID(face recognition)
3.netflix recomendation etc....

generative Ai:-
- in generative AI ,is not only classify the data but it's generate some new data through Ai.
ex:-
1.chatgpt(text generation/image)
2.mid journey (image generation)
3.github capilot(code generation) etc...

Evolution of :-run,lstm & transformer 


1.RNN(recurrent neural network)

- An RUN is a type of neural network designed to process sequential data like...
-text
-speech
-time series etc...

-   it process the data step by step.
-   it rember privious information using hidden state in RUN.

previous inf.->RUN ->new inf.

ex. sentense -> "i love AI"
RUN reads it -  "i" ->then "love" ->then "AI" (like keeping memory of previous word )

the dis-advantages are ->
1.it can't rember a long  sentense because of short memory.
2.struggle with reading long setense.

LSTM:-
it stands for  long short term memory .
it is an improved version of RUN 

How LSTM works ->
- LSTM uses some gates to control info.
- forget space -> removes the useless data.
- input gate   -> adds new data/info.
- output gate -> decides whats the output.

- basically it acts like a "smart memory system".

Advantages ->

it solves RUN's memory problem.
- works well for 
- languages traslation
- speech recognition
- Time- series predication

3. transformer ->

- transformer is a AI architecture that  power LLM's(like chatgpt).

How it works :-

- uses self-attention mechansim.
(it allows to understand context ,relation between works in a sequence)
- LOOKS at all works at once ,not step by step.

ex. the animal did'nt cross  the road because it was tired.

- in  this ex , the transformer understand "it" refers to animal using attention mechanism.

advantages ->
1. handle long context very well.
2. faster (processing is very first)
3. give more accurate o/p than RUN/LSTM.

features         RUN            LSTM             transformer
data processing  sequential      sequential       parallel 
memory           short           long          very long
speed            slow            slow            fast
performance      basic           better           best 

promot engineering ->

- by the help of transformer we can do the promot engineering in a better way.

1.long context: transformer helps to memories the long context given in the promot .(it works on parallel data processing)

2.contextual  understanding : if we can put same word in different form then transformer also understand that word properly.

ex. bank (river bank ,financial bank)

- AI don't read our words ,it need tokens
- we can't take 1 token  as a 1 word ,although "unbelivable " word can  segrigate to different token .

ex. 
- words : "playing" -> play + ing
- words :  transformation -> trans + form + ation

- AI didn't understand words directly so we can segrigate different token to form prefix (re-,un-) & suffix(-ing, -ation.-ed) so that AI can recreate some words by recognize it properly.

token -> 

AI tools                        approx token limit


chatGPT                         -128,000 to -256,000 token(depending on version)


Gemini                           -1,000,000 to -2,000,000 token

claude                          up to -1,000,000 token(standards) up to -1,000, 000 token(enterprize)

perplexity                       -128,000 to  -2,000,000  tokens

context window of different LLMS :-

1.chatGPT-> excellent for long discussion ,essays ,emails,summarization within it's -128k  -256k tokens.

2. Gemini-> processing multiple books ,large size docs at once ,large codebase analysis is one snap ,short,complete projects task across long charts etc....

3. claude -> it ideal for large document reasoning/scanning with  more safely.
4. perplexity AI -> uses in versious  backend model.

structure promoting ->
1.role(person role)
2.context
3.task(what action we perform)
4.constraints (negative constraints)
5.output


we can takes some scenario for promoting ->
use case - 1: writing & content creation

simple promot -> write a code email for google internship.

engineering promot -> "act's as a carrier coach .write a personalized cold email to a recruiter at google for a data science internship. mention my proficiency in python & sql .keep the tone professional but eager and limit bit to 150 words".

use case 2.: coding & techinical task

simple promot -> fix this code (some code)
 E. promot -> "act's as a senior python developer.review the following code for a long in logics ,identify potential security vulnarabilities and logical errors . provide corrected code with comments explaining each fix".

 module 2-> core prompting techinique ->

 1.zero shot prompting :"direct order"

- in this prompting we didn't give any example to AI but we provide a small instruction and we think that by the help of pre -trained knowledege ,AI will provide the answers.

promot-> classify the sentiment of this review :"the battery life of this laptop is amazing but the screen is a bit dull".

output -> mixed/neutral

2.few shot prompting : the "patterns maker"

- we have face some problem on zero shot prompting because sometimes it failed but in few shot prompting ,we have to give 3,4  some example to understand the pattern  of our prompt then it gives a good response.

ex. give the customer feedback in json format.
input/prompt:
example 1 : i love the pizza ! -> {"sentiment": "possitive","label":1}
example 2 : the delivery was late ->{"sentiment":"negative","label":0}
example 3 : the food was ok ->{"sentiment":"neutral","label":0.5}

3.chain of thought (COT) : the "logical thinker"

- this is the most imp . techinique to  solve complex problem. if we can put anything in AI, and we give prompt "think step by step " but AI will look in full sentence and create the logic then give the output. so it's create a little "hallucination"/confusion.

- use case this ->
- prompt  ->  "a farmer 15 sheep. all but 8 die.how much are left ? let's think step by step "

1.total sheep =15
2.all but 8 die means only 8 are left but rest sheep are die.
3.so only 8 sheep are present.

final answer-8.
4. instruction prompting :framework

- in this prompting we can put step  by step instruction so that it will give the requried output .

- persona (role): "act's as a senior python dev"
- constraints(limit):"don't use external libraries.
keep code under 20 lines "
- specify instruction :"explain the code like  i am 5 years old"

use case - writting profssional email 
promot- "act's as a polite HR manger .write a rejection email for a candidate who clear the interview but we can not hire due to budget cuts .mention that we will keep their cv for future .
constraints -> keep it simple and empathic.

module 3:- advanced promot engineering framework ->

1. react framework(reason + action)

- react means reason + acting .
- before some time AI only think or AI only give the result but now in react framework AI will work on the basic of a loop .like it will thinks  first then give the result then think again whether it's right or wrong then again give the result.

use case:- researching a market trend using AI with browising capabilities (like chatGPT with search or properly)

promot-> "solve the following task using a thought - action- desrevartion loop.task :analyze  the current stock performance of INDIA compared to its competiors in the last 7 days .
instruction:1. start with a thought (what do we need to find ) 2. performe an action (search for the specific data )3.provide an observation(summarize what we find).4.repeat utill you can provide a final recomendation for a short-term investor .

2.there  of thoughts(tot)

-"there are of thoughts " is more efficent thsn "chain of thoughts",we can say tot is a big brother of cot.
- in "cot " AI " can think for only the one line in tot it can segrigate one line into different branches/nodes like as a tree then think it separetly.

use case:- in tot the  strategies aren suppose will take A,B,& C in these 3 branches of a line suppose we find B will work better than c/a then they cancel c/a only take b as the resultant.
