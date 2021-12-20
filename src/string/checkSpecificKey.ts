/**
 * 特殊字符校验
 * RFC3986文档规定，Url中只允许包含英文字母（a-zA-Z）、数字（0-9）、-_.~4个特殊字符以及所有保留字符。
 * 保留字符 !	*	'	(	)	;	:	@	&	=	+	$	,	/	?	#	[	]
 * 不安全字符 空格 " < > # % { } | \ ^ [ ] ` ~
 * @param str
 * //TODO 该限制的字符
 */
 const checkSpecificKey = (str: string): boolean => {
    return /^((?!'|"|`|‘|’|“|”|@|<|>|\\|\/|\{|\}|&|[|]|[$]|[%])[\s\S])*$/.test(str);
};
 export  default checkSpecificKey